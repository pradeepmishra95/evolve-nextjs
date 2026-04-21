'use client';

import { useState } from 'react';

import styles from './FaqAccordion.module.css';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: readonly FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className={styles.item}>
            <button
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((current) => (current === index ? null : index))}
            >
              <span>{item.question}</span>
              <span>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen ? <p className={styles.answer}>{item.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
