
import styles from "./blog.module.css"; // optional if you style it

export default function Blog() {
  return (
    <section className={styles.wrapper}>
    

      <div className={styles.container}>
        <h1>Fitness Knowledge Hub — Coming Soon</h1>

        <p>
          We are currently preparing high-quality articles focused on MMA,
          Calisthenics, Strength Training, Fat Loss, Mobility, and Injury
          Prevention.
        </p>

        <p>
          Our goal is to provide practical, science-backed guidance that helps
          beginners start safely and allows athletes to train smarter.
        </p>

        <p>
          Very soon you will find detailed guides, training tips, nutrition
          strategies, and expert insights from professional coaches.
        </p>

        <div className={styles.highlightBox}>
          <h3>What You Can Expect:</h3>
          <ul>
            <li>Beginner → Advanced workout guides</li>
            <li>MMA and Calisthenics training frameworks</li>
            <li>Fat loss & muscle building strategies</li>
            <li>Recovery and injury prevention</li>
            <li>Diet plans for performance</li>
          </ul>
        </div>

        <p className={styles.launchText}>
          🚀 First set of articles launching soon. Stay connected.
        </p>
      </div>
    </section>
  );
}

