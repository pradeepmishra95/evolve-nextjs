'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import ProgramPreviewModal from '@/components/ProgramPreviewModal';
import { PROGRAMS } from '@/data/programs';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './Excersises.module.css';

export default function Excercises() {
  const [activeProgram, setActiveProgram] = useState(null);

  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={24}>
          <div className={styles.headerTop}>
            <div className={styles.headerCopy}>
              <p className={styles.eyebrow}>Programs</p>
              <h2>Three paths, three very different training experiences.</h2>
              <p className={styles.lead}>
                Each program has its own technical focus, class rhythm, and kind of progress.
                Watch a quick preview, then explore the path that matches what you want to learn.
              </p>
            </div>

            <div className={styles.headerSide}>
              <p className={styles.headerNote}>
                Start with the discipline that pulls you in most strongly. You can always
                grow into more once the habit is built.
              </p>

              <Link href="/programs" className={styles.viewAll}>
                Explore Programs
              </Link>
            </div>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {PROGRAMS.map((item, index) => (
            <Reveal
              key={item.slug}
              className={styles.card}
              delay={index * 70}
              distance={22}
            >
              <div className={styles.mediaWrap}>
                <Image
                  src={item.image}
                  alt={`${item.name} training at Evolve MMA & Calisthenics`}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.image}
                  style={{
                    objectFit: item.imageFit ?? 'cover',
                    objectPosition: item.imagePosition ?? 'center',
                  }}
                />
                <div className={styles.mediaOverlay} />
                <span className={styles.cardNumber}>0{index + 1}</span>
                {item.previewVideo ? (
                  <button
                    type="button"
                    className={styles.previewButton}
                    onClick={() => setActiveProgram(item)}
                  >
                    Watch Preview
                  </button>
                ) : null}
              </div>

              <div className={styles.cardBody}>
                <span className={styles.tag}>{item.label}</span>
                <h3>{item.name}</h3>
                <p className={styles.description}>{item.teaser}</p>

                <ul className={styles.pointList}>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  <span className={styles.footerLabel}>Best for</span>
                  <p className={styles.footerText}>{item.bestFor}</p>
                </div>

                <div className={styles.cardActions}>
                  <Link href={`/programs/${item.slug}`} className={styles.secondaryAction}>
                    View Program
                  </Link>
                  <Link
                    href={BOOK_TRIAL_PATH}
                    className={styles.primaryAction}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book A Trial
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProgramPreviewModal
        open={Boolean(activeProgram)}
        onClose={() => setActiveProgram(null)}
        title={activeProgram?.name || ''}
        videoSrc={activeProgram?.previewVideo || ''}
      />
    </section>
  );
}
