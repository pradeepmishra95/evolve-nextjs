import styles from './timings.module.css';

export default function Timings() {

  const whatsappLink = "https://wa.me/918850957882";

  const EnrollButton = () => (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.enrollBtn}
    >
      Enroll Now
    </a>
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>Training Timings</h2>

        {/* MMA */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            MMA Training (Monday – Friday)
          </h3>

          <h4 className={styles.batchTitle}>Morning Batches</h4>

          <div className={styles.tilesWrapper}>
            {["06:00 – 07:00","07:00 – 08:00","08:00 – 09:00","09:00 – 10:00"].map((time)=>(
              <div className={styles.tile} key={time}>
                <div className={styles.timeTile}>{time}</div>
                <EnrollButton />
              </div>
            ))}
          </div>

          <h4 className={styles.batchTitle}>Evening Batches</h4>

          <div className={styles.tilesWrapper}>
            {["06:00 – 07:00 PM","07:00 – 08:00 PM","08:00 – 09:00 PM","09:00 – 10:00 PM"].map((time)=>(
              <div className={styles.tile} key={time}>
                <div className={styles.timeTile}>{time}</div>
                <EnrollButton />
              </div>
            ))}
          </div>
        </div>


        {/* Calisthenics */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Calisthenics Normal Batches (Monday - Friday)
          </h3>

          <h4 className={styles.batchTitle}>Morning Batches</h4>

          <div className={styles.tilesWrapper}>
            {["06:00 – 07:00","07:00 – 08:00","08:00 – 09:00","09:00 – 10:00"].map((time)=>(
              <div className={styles.tile} key={time}>
                <div className={styles.timeTile}>{time}</div>
                <EnrollButton />
              </div>
            ))}
          </div>

          <h4 className={styles.batchTitle}>Evening Batches</h4>

          <div className={styles.tilesWrapper}>
            {["06:00 – 07:00 PM","07:00 – 08:00 PM","08:00 – 09:00 PM","09:00 – 10:00 PM"].map((time)=>(
              <div className={styles.tile} key={time}>
                <div className={styles.timeTile}>{time}</div>
                <EnrollButton />
              </div>
            ))}
          </div>
        </div>


        {/* Advanced */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Advanced Calisthenics Batches (Monday – Wednesday – Friday)
          </h3>

          <div className={styles.tilesWrapper}>
            {["08:00 – 09:00 AM","08:00 – 09:00 PM"].map((time)=>(
              <div className={styles.tile} key={time}>
                <div className={styles.timeTile}>{time}</div>
                <div className={styles.program}>
                  Advanced Calisthenics Batch
                </div>
                <EnrollButton />
              </div>
            ))}
          </div>
        </div>


        {/* Kids */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Kids Batches (Tuesday – Thursday – Saturday)
          </h3>

          <div className={styles.tilesWrapper}>
            <div className={styles.tile}>
              <div className={styles.timeTile}>
                07:00 – 08:00 PM
              </div>

              <div className={styles.program}>
                Kids Training
              </div>

              <EnrollButton />
            </div>
          </div>
        </div>


        {/* Saturday */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Saturday – Recovery & Fun Activities
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
