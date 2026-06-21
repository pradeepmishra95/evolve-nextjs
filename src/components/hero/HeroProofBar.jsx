import styles from './Hero.module.css';

const proofItems = [
  {
    label: 'Trial class',
    value: 'Visit before joining',
    detail: 'See the pace before you commit.',
  },
  {
    label: 'Skill-first',
    value: 'Guided in every batch',
    detail: 'Corrections, demos, and clear class flow.',
  },
  {
    label: 'Timings',
    value: '6 AM - 10 PM',
    detail: 'Morning and evening options.',
  },
  {
    label: 'Location',
    value: 'Near Lower Malad Metro',
    detail: 'Easy access from Malad West.',
  },
];

export default function HeroProofBar() {
  return (
    <div className={styles.proofBar}>
      {proofItems.map((item) => {
        const content = (
          <>
            <span className={styles.proofLabel}>{item.label}</span>
            <strong className={styles.proofValue}>{item.value}</strong>
            <small className={styles.proofDetail}>{item.detail}</small>
          </>
        );

        return (
          <div key={item.label} className={styles.proofCard}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
