import Image from 'next/image';

import styles from './RoamingTiger.module.css';

export default function RoamingTiger() {
  return (
    <div className={styles.roamingTiger} aria-hidden="true">
      <span className={styles.bubble}>Let&apos;s go to Evolve!</span>
      <div className={styles.viewport}>
        <Image
          src="/images/mascot/tiger-cub-run-sprite-v2.png"
          alt=""
          width={2160}
          height={284}
          sizes="(max-width: 640px) 528px, 720px"
          className={styles.sprite}
          draggable="false"
        />
      </div>
    </div>
  );
}
