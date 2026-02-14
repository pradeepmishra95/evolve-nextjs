import styles from './coaches.module.css';

export default function Coaches() {
  return (
    <section className={styles.wrapper}>

      <div className={styles.container}>

        <h2 className={styles.title}>Our Coaches</h2>

        <div className={styles.grid}>

          {/* Coach 1 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/RahulGupta_mnreqs.jpg"  alt="Head Calisthenics Coach" />
            </div>

            <h3>Head Calisthenics Coach</h3>
            <p>10+ years experience in Calisthenics, Strength, mobility and bodyweight specialist</p>
            <span>Calisthenics • Strength</span>
          </div>

          {/* Coach 2 */}

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/Zaid_dertug.jpg" alt="MMA Coach" />
            </div>

            <h3>MMA Coach</h3>
            <p>Focus on discipline, confidence and safety</p>
            <span>MMA • Striking • Grappling</span>
          </div>


          {/* Coach 3 */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src="https://res.cloudinary.com/dd9yqqsa4/image/upload/w_800,c_fill,g_auto,dpr_auto,q_auto:best,f_auto/VishalYadav_wvfgos.jpg" />
            </div>

            <h3>Calisthenics Coach</h3>
            <p>5 + years experience in Calisthenics, Strength, mobility and bodyweight specialist</p>
            <span>Calisthenics • Strength</span>
          </div>





        </div>
      </div>

    </section>
  );
}
