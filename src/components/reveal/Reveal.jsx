'use client';

import { useEffect, useRef } from 'react';

import styles from './Reveal.module.css';

export default function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  distance = 28,
  once = true,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      node.dataset.revealed = 'true';
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.revealed = 'true';

          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          node.dataset.revealed = 'false';
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${className}`.trim()}
      data-revealed="false"
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-distance': `${distance}px`,
      }}
    >
      {children}
    </Tag>
  );
}
