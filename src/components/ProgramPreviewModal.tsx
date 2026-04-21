'use client';

import { useEffect } from 'react';

import styles from './ProgramPreviewModal.module.css';

type ProgramPreviewModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  videoSrc: string;
};

export default function ProgramPreviewModal({
  open,
  onClose,
  title,
  videoSrc,
}: ProgramPreviewModalProps) {
  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-label={title}>
      <button type="button" className={styles.backdrop} onClick={onClose} aria-label="Close preview" />
      <div className={styles.modal}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Program Preview</p>
            <h3>{title}</h3>
          </div>
          <button type="button" className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>
        <div className={styles.videoFrame}>
          <video
            controls
            autoPlay
            playsInline
            preload="metadata"
            className={styles.video}
            src={videoSrc}
          />
        </div>
      </div>
    </div>
  );
}
