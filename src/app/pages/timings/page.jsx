import styles from './timings.module.css';

export default function Timings() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Training Timings</h2>

        {/* Morning */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Morning Batches (Monday – Friday)
          </h3>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Time</th>
                <th>MMA</th>
                <th>Calisthenics</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>06:00 – 07:00</td>
                <td>Adult Batch</td>
                <td>Adult Batch</td>
              </tr>

              <tr>
                <td>07:00 – 08:00</td>
                <td>Adult Batch</td>
                <td>Adult Batch</td>
              </tr>

              {/* ⭐ ADVANCED ONLY MWF */}
              <tr className={styles.advanced}>
                <td>08:00 – 09:00</td>
                <td>Adult Batch</td>
                <td>
                  Advanced Calisthenics  
                  <span className={styles.days}>
                    (Mon – Wed – Fri)
                  </span>
                </td>
              </tr>

              <tr>
                <td>09:00 – 10:00</td>
                <td>Adult Batch</td>
                <td>Adult Batch</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Evening */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Evening Batches (Monday – Friday)
          </h3>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Time</th>
                <th>MMA</th>
                <th>Calisthenics</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>06:00 – 07:00</td>
                <td>Adult Batch</td>
                <td>Adult Batch</td>
              </tr>

              {/* ⭐ ADVANCED ONLY MWF */}
              <tr className={styles.advanced}>
                <td>08:00 – 09:00</td>
                <td>Adult Batch</td>
                <td>
                  Advanced Calisthenics  
                  <span className={styles.days}>
                    (Mon – Wed – Fri)
                  </span>
                </td>
              </tr>

              <tr>
                <td>09:00 – 10:00</td>
                <td>Adult Batch</td>
                <td>Adult Batch</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kids */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Kids Batch (Tuesday – Thursday – Saturday)
          </h3>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>Time</th>
                <th>Program</th>
              </tr>
            </thead>

            <tbody>
              <tr className={styles.kids}>
                <td>07:00 – 08:00 PM</td>
                <td>Kids Training</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Saturday */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Saturday – Fun & Conditioning
          </h3>

          <ul className={styles.list}>
            <li>Beach Training Session</li>
            <li>Ice Bath Recovery</li>
            <li>Marathon & Endurance Runs</li>
            <li>Team Games & Mobility Work</li>
            <li>Yoga & Meditation</li>
            <li>Pranayam</li>
            <li>Fitness Competition</li>
            <li>Dance</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

