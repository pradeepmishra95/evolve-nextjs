import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';

import styles from './blog.module.css';

export const metadata = {
  title: 'Training Tips & Beginner Guidance Blog',
  description:
    'Read practical training guidance from Evolve MMA & Calisthenics on starting well, staying consistent, choosing the right batch, and improving safely.',
  keywords: [
    'MMA training tips Mumbai',
    'calisthenics beginner tips',
    'fat loss training advice',
    'fitness blog Malad West',
    'gym beginner guidance Mumbai',
  ],
  openGraph: {
    title: 'Blog | Evolve MMA & Calisthenics',
    description:
      'Practical guidance on MMA, calisthenics, consistency, recovery, and starting your training journey well.',
  },
};

const articles = [
  {
    category: 'Getting Started',
    title: 'How to start MMA or calisthenics when you feel out of shape',
    intro:
      'Most beginners do not need a perfect plan. They need a first step that feels manageable and a coach who helps them progress from there.',
    points: [
      'Choose a batch where technique and pace can be adjusted for beginners.',
      'Focus on consistency first instead of trying to prove fitness on day one.',
      'Let the first few sessions teach you what your body needs most: mobility, stamina, or strength.',
    ],
  },
  {
    category: 'Fat Loss',
    title: 'Why random hard workouts stop working for fat loss',
    intro:
      'Sweating hard is not the same as progressing well. Better fat-loss training usually comes from structure, repeatability, and sustainable effort.',
    points: [
      'A program needs enough intensity to challenge you and enough structure to repeat it consistently.',
      'Strength, conditioning, and recovery all matter if you want results that last.',
      'The right environment makes it easier to stick with training beyond the first motivated week.',
    ],
  },
  {
    category: 'Consistency',
    title: 'How to choose a training schedule you can actually keep',
    intro:
      'The best batch is not just the one that sounds ambitious. It is the one you can return to without friction week after week.',
    points: [
      'Pick a slot that works with your job, commute, or family routine before you chase the “ideal” program.',
      'Morning and evening availability make consistency easier when life gets busy.',
      'A coach can help you choose between programs based on energy, recovery, and current level.',
    ],
  },
];

const quickAnswers = [
  {
    question: 'What should a beginner read into before joining?',
    answer:
      'Less than most people think. It is more useful to understand your goal, your available timings, and how much guidance you want early on.',
  },
  {
    question: 'What kind of training advice is actually practical?',
    answer:
      'Advice that helps you start, stay consistent, and progress safely is usually more valuable than advanced hacks you cannot apply yet.',
  },
  {
    question: 'What does this page exist to help with?',
    answer:
      'Choosing the right starting point, understanding what good training structure looks like, and making the first visit feel less intimidating.',
  },
];

export default function Blog() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <Reveal className={styles.hero} distance={24}>
          <p className={styles.eyebrow}>Knowledge Hub</p>
          <h1>Practical guidance for people who want to start and stay consistent.</h1>
          <p className={styles.lead}>
            This page is built to answer the questions people usually ask before
            they join: how to start, how to choose the right batch, and what kind
            of training structure actually helps over time.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/918850957882?text=Hi!%20I%20want%20help%20choosing%20the%20right%20program%20and%20batch."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryLink}
            >
              Ask For Guidance
            </a>

            <Link href="/programs" className={styles.secondaryLink}>
              Explore Programs
            </Link>
          </div>
        </Reveal>

        <div className={styles.articleGrid}>
          {articles.map((article, index) => (
            <Reveal
              key={article.title}
              className={styles.articleCard}
              delay={index * 80}
              distance={20}
            >
              <span className={styles.category}>{article.category}</span>
              <h2>{article.title}</h2>
              <p className={styles.articleIntro}>{article.intro}</p>
              <ul className={styles.topicList}>
                {article.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.answerPanel} delay={90} distance={20}>
          <div className={styles.answerHeader}>
            <div>
              <p className={styles.eyebrow}>Quick Answers</p>
              <h2>What this page should make easier</h2>
            </div>

            <a
              href="https://www.instagram.com/evolve_mmacalisthenics"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              Follow On Instagram
            </a>
          </div>

          <div className={styles.answerGrid}>
            {quickAnswers.map((item, index) => (
              <Reveal
                key={item.question}
                className={styles.answerCard}
                delay={index * 70}
                distance={16}
              >
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
