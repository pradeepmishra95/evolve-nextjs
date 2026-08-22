import Link from 'next/link';

import Reveal from '@/components/reveal/Reveal';
import { CONTACT_PHONE_NUMBER } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

import styles from './careers.module.css';

export const metadata = buildMetadata({
  title: 'Careers | Join the Evolve Coaching Team',
  description:
    'Explore trainer opportunities at Evolve Sports And Fitness Club in Malad West, Mumbai. Apply for calisthenics, functional training, MMA, yoga, and dance trainer roles.',
  path: '/careers',
  keywords: [
    'fitness trainer jobs Mumbai',
    'MMA trainer job Mumbai',
    'calisthenics trainer job',
    'yoga trainer vacancy Mumbai',
    'dance trainer job Malad',
  ],
});

const jobs = [
  {
    number: '01',
    title: 'Calisthenics Trainer',
    tag: 'Strength & Skills',
    summary:
      'Coach bodyweight strength, mobility, and skill progressions for members across experience levels.',
    qualities: ['Strong fundamentals', 'Progression-based coaching', 'Clear movement cues'],
  },
  {
    number: '02',
    title: 'Functional Trainer',
    tag: 'Performance',
    summary:
      'Lead purposeful sessions that improve everyday strength, conditioning, mobility, and confidence.',
    qualities: ['Session programming', 'Form correction', 'Member motivation'],
  },
  {
    number: '03',
    title: 'MMA Trainer',
    tag: 'Combat Sports',
    summary:
      'Teach safe, disciplined striking and grappling fundamentals in structured group and personal sessions.',
    qualities: ['Technical experience', 'Safety-first mindset', 'Confident pad work'],
  },
  {
    number: '04',
    title: 'Yoga Trainer',
    tag: 'Mobility & Mindfulness',
    summary:
      'Guide accessible yoga sessions with thoughtful sequencing, breathwork, and individual attention.',
    qualities: ['Certified instruction', 'Inclusive teaching', 'Mindful sequencing'],
  },
  {
    number: '05',
    title: 'Dance Trainer',
    tag: 'Movement & Energy',
    summary:
      'Bring music and movement together in energetic classes that welcome beginners and challenge regulars.',
    qualities: ['Strong choreography', 'Group engagement', 'High-energy delivery'],
  },
];

const applicationWhatsapp = (role: string) =>
  `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(
    `Hi Evolve team! I would like to apply for the ${role} position. I will share my resume and details here.`
  )}`;

const careersWhatsapp = `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(
  'Hi Evolve team! I am interested in joining your coaching team. Please share the next steps.'
)}`;

export default function CareersPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.shell}>
          <Reveal className={styles.heroGrid} distance={22}>
            <div className={styles.heroCopy}>
              <p className="section-eyebrow">Careers At Evolve</p>
              <h1>Turn your discipline into someone else&apos;s breakthrough.</h1>
              <p>
                We&apos;re looking for coaches who care about the craft, bring good energy,
                and know that the smallest correction can change a member&apos;s whole journey.
              </p>
              <div className={styles.heroActions}>
                <a href="#open-roles" className="button-primary">
                  Explore Open Roles
                </a>
                <a
                  href={careersWhatsapp}
                  className="button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Talk To Our Team
                </a>
              </div>
            </div>

            <aside className={styles.heroCard}>
              <span className={styles.pulse} aria-hidden="true" />
              <p>Now hiring in Malad West</p>
              <strong>5 coaching roles</strong>
              <div className={styles.roleTicker}>
                <span>Calisthenics</span>
                <span>Functional</span>
                <span>MMA</span>
                <span>Yoga</span>
                <span>Dance</span>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section id="open-roles" className={styles.rolesSection} aria-labelledby="roles-title">
        <div className={styles.shell}>
          <div className={styles.sectionIntro}>
            <div>
              <p className="section-eyebrow">Open Positions</p>
              <h2 id="roles-title">Find your place on the floor.</h2>
            </div>
            <p>
              We value solid fundamentals, patient instruction, and coaches who make every
              person feel welcome while maintaining a high training standard.
            </p>
          </div>

          <div className={styles.jobsGrid}>
            {jobs.map((job, index) => (
              <Reveal
                as="article"
                key={job.title}
                className={`${styles.jobCard} ${index === 0 ? styles.featuredJob : ''}`}
                delay={(index % 2) * 70}
                distance={18}
              >
                <div className={styles.jobTop}>
                  <span>{job.number}</span>
                  <span>{job.tag}</span>
                </div>
                <h3>{job.title}</h3>
                <p>{job.summary}</p>
                <ul>
                  {job.qualities.map((quality) => (
                    <li key={quality}>{quality}</li>
                  ))}
                </ul>
                <a
                  href={applicationWhatsapp(job.title)}
                  className={styles.applyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply on WhatsApp <span aria-hidden="true">↗</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.shell}>
          <Reveal className={styles.processPanel} distance={18}>
            <div className={styles.processCopy}>
              <p className="section-eyebrow">How To Apply</p>
              <h2 id="process-title">Your next coaching chapter starts here.</h2>
              <p>
                Send us your resume, coaching profile, or a short introduction. Include your
                certifications, experience, preferred role, and availability.
              </p>
              <a
                href={applicationWhatsapp('Trainer')}
                className="button-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply On WhatsApp
              </a>
            </div>

            <ol className={styles.steps}>
              <li>
                <span>01</span>
                <div>
                  <strong>Share your profile</strong>
                  <p>Tell us about your discipline, experience, and availability.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Meet the team</strong>
                  <p>We&apos;ll talk through your approach and what you&apos;re looking for.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Show us your coaching</strong>
                  <p>Shortlisted applicants may be invited for a practical round.</p>
                </div>
              </li>
            </ol>
          </Reveal>

          <div className={styles.note}>
            <span>Don&apos;t see your exact specialty?</span>
            <p>Great coaches are always worth meeting.</p>
            <Link href="/contactus">Introduce yourself anyway →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
