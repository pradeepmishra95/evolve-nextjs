'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import styles from './TigerCubMascot.module.css';

const DESKTOP_WIDTH = 110;
const MOBILE_WIDTH = 82;
const FRAME_RATIO = 284 / 360;
const DESKTOP_SPEED = 58;
const MOBILE_SPEED = 42;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

export default function TigerCubMascot() {
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mascot = mascotRef.current;

    if (!mascot) {
      return undefined;
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (reducedMotion.matches) {
      return undefined;
    }

    const coarsePointer = window.matchMedia('(pointer: coarse)');
    let width = coarsePointer.matches ? MOBILE_WIDTH : DESKTOP_WIDTH;
    let spriteHeight = width * FRAME_RATIO;
    let height = spriteHeight;
    let currentX = 18;
    let currentY = Math.max(90, window.innerHeight - height - 80);
    let targetX = currentX;
    let targetY = currentY;
    let direction = 1;
    let animationFrame = 0;
    let roamTimer: number | undefined;
    let lastFrameTime = performance.now();

    const chooseNextTarget = () => {
      const sidePadding = coarsePointer.matches ? 22 : 30;
      const topPadding = coarsePointer.matches ? 116 : 128;
      const bottomPadding = coarsePointer.matches ? 76 : 18;
      const availableX = Math.max(0, window.innerWidth - width - sidePadding * 2);
      const availableY = Math.max(
        0,
        window.innerHeight - height - topPadding - bottomPadding
      );

      targetX = sidePadding + Math.random() * availableX;
      targetY = topPadding + Math.random() * availableY;

      if (Math.abs(targetX - currentX) > 3) {
        direction = targetX > currentX ? 1 : -1;
      }

      mascot.dataset.running = 'true';
    };

    const pauseBeforeRoaming = () => {
      mascot.dataset.running = 'false';
      window.clearTimeout(roamTimer);
      roamTimer = window.setTimeout(chooseNextTarget, 500 + Math.random() * 900);
    };

    const handleResize = () => {
      width = coarsePointer.matches ? MOBILE_WIDTH : DESKTOP_WIDTH;
      spriteHeight = width * FRAME_RATIO;
      height = spriteHeight;
      mascot.style.setProperty('--cub-width', `${width}px`);
      mascot.style.setProperty('--cub-sprite-height', `${spriteHeight}px`);
      mascot.style.setProperty('--cub-height', `${height}px`);
      const sidePadding = coarsePointer.matches ? 22 : 30;
      const topPadding = coarsePointer.matches ? 116 : 128;
      targetX = clamp(
        targetX,
        sidePadding,
        Math.max(sidePadding, window.innerWidth - width - sidePadding)
      );
      targetY = clamp(
        targetY,
        topPadding,
        Math.max(topPadding, window.innerHeight - height - 8)
      );
    };

    const animate = (frameTime: number) => {
      const elapsedSeconds = Math.min((frameTime - lastFrameTime) / 1000, 0.05);
      const differenceX = targetX - currentX;
      const differenceY = targetY - currentY;
      const distance = Math.hypot(differenceX, differenceY);
      const speed = coarsePointer.matches ? MOBILE_SPEED : DESKTOP_SPEED;

      lastFrameTime = frameTime;

      if (distance > 1) {
        const travel = Math.min(distance, speed * elapsedSeconds);
        currentX += (differenceX / distance) * travel;
        currentY += (differenceY / distance) * travel;
        mascot.style.setProperty(
          '--cub-tilt',
          `${clamp((differenceY / distance) * 7, -7, 7)}deg`
        );
      } else if (mascot.dataset.running === 'true') {
        currentX = targetX;
        currentY = targetY;
        mascot.style.setProperty('--cub-tilt', '0deg');
        pauseBeforeRoaming();
      }

      mascot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      mascot.style.setProperty('--cub-direction', String(direction));
      animationFrame = window.requestAnimationFrame(animate);
    };

    mascot.style.setProperty('--cub-width', `${width}px`);
    mascot.style.setProperty('--cub-sprite-height', `${spriteHeight}px`);
    mascot.style.setProperty('--cub-height', `${height}px`);
    mascot.dataset.ready = 'true';
    chooseNextTarget();
    animationFrame = window.requestAnimationFrame(animate);

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(roamTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      ref={mascotRef}
      className={styles.mascot}
      data-ready="false"
      data-running="false"
      aria-hidden="true"
    >
      <div className={styles.speechBubble}>Let&apos;s go to Evolve!</div>

      <div className={styles.direction}>
        <div className={styles.viewport}>
          <Image
            className={styles.spriteStrip}
            src="/images/mascot/tiger-cub-run-sprite-v2.png"
            alt=""
            width={2160}
            height={284}
            sizes="900px"
            unoptimized
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
