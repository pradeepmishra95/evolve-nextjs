import Image from 'next/image';
import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { BOOK_TRIAL_PATH } from '@/lib/links';

import styles from './TrainingGallery.module.css';

type GalleryItem = {
  title: string;
  label: string;
  image: string;
  imageFit?: 'cover' | 'contain';
};

const galleryItems: GalleryItem[] = [
  {
    title: 'MMA Fundamentals',
    label: 'MMA',
    image: '/images/gallery/IMG_1375.PNG', // Replace with real photography.
  },
  {
    title: 'Calisthenics Strength',
    label: 'Calisthenics',
    image: '/images/gallery/IMG_1378.PNG', // Replace with real photography.
  },
  {
    title: 'Jumba Session',
    label: 'Jumba',
    image: '/images/gallery/zumba-urban.jpg',
  },
  {
    title: 'Pad Work Session',
    label: 'MMA',
    image: '/images/gallery/mma-1.jpg', // Replace with real photography.
  },
  {
    title: 'Bar Control',
    label: 'Calisthenics',
    image: '/images/gallery/calisthenics-1.jpg', // Replace with real photography.
  },
  {
    title: 'Yoga Flow',
    label: 'Yoga',
    image: '/images/gallery/yoga-india.jpg',
    imageFit: 'contain',
  },
];

export default function TrainingGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <Reveal className={styles.header} distance={24}>
          <div>
            <p className="section-eyebrow">Training Gallery</p>
            <h2 className="section-heading">A quick look at the energy, focus, and movement inside the space.</h2>
          </div>
          <p className="section-lead">
            Training at Evolve is visual: pad rounds, bodyweight strength work,
            landings, vaults, and coached repetitions that make progress feel real.
          </p>
        </Reveal>

        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <Reveal
              key={`${item.title}-${index}`}
              className={`${styles.tile} ${index === 0 ? styles.large : ''}`}
              delay={index * 50}
              distance={18}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.image}
                style={{ objectFit: item.imageFit ?? 'cover' }}
              />
              <div className={styles.overlay} />
              <div className={styles.caption}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.footer} distance={18}>
          <p>Want to see the training live instead of guessing from photos?</p>
          <Link href={BOOK_TRIAL_PATH} className="button-primary" target="_blank" rel="noopener noreferrer">
            Book A Trial
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
