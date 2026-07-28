import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PROGRAMS, getProgramBySlug, type ProgramSlug } from '@/data/programs';
import { BOOK_TRIAL_PATH } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

type ProgramPageProps = {
  params: Promise<{ slug: ProgramSlug }>;
};

const audienceCopy: Record<ProgramSlug, string[]> = {
  mma: [
    'First-time and experienced combat trainees',
    'People who want skill-based conditioning',
    'Students and working professionals',
  ],
  calisthenics: [
    'Anyone building bodyweight strength',
    'People who enjoy holds, movement, and control',
    'Students improving mobility and posture',
  ],
  zumba: [
    'People who enjoy music and group energy',
    'Anyone looking for engaging cardio',
    'Newcomers who want approachable intensity',
  ],
  yoga: [
    'Anyone improving mobility and flexibility',
    'People who prefer a calmer practice',
    'Trainees balancing strength or combat work',
  ],
};

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return {};
  }

  return buildMetadata({
    title: program.metaTitle,
    description: program.metaDescription,
    path: `/programs/${program.slug}`,
    keywords: [
      `${program.shortName} Malad West`,
      `${program.shortName} Mumbai`,
      `${program.shortName} training center`,
      'Evolve Sports And Fitness Club',
    ],
  });
}

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  const audience = audienceCopy[program.slug];

  return (
    <main className="site-section site-section-dark">
      <div className="site-shell section-stack">
        <section className="page-copy page-hero">
          <p className="section-eyebrow">{program.label}</p>
          <h1 className="section-heading">{program.name} at Evolve</h1>
          <p className="section-lead">{program.description}</p>
          <div className="page-actions">
            <Link
              href={BOOK_TRIAL_PATH}
              className="button-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book A Trial
            </Link>
            <Link href="/timings" className="button-secondary">
              See Timings
            </Link>
          </div>
        </section>

        <section className="two-column">
          <article className="info-card">
            <span className="section-eyebrow">Highlights</span>
            <strong>{program.highlights.join(' • ')}</strong>
            <p>{program.firstClass}</p>
          </article>
          <article className="info-card">
            <span className="section-eyebrow">Best For</span>
            <strong>{program.bestFor}</strong>
            <p>{program.scheduleHint}</p>
          </article>
        </section>

        <section className="detail-accordion" aria-label="Program details">
          <details className="detail-accordion-item">
            <summary>What to expect</summary>
            <p>
              Learn {program.shortName.toLowerCase()} through technique, repetition, and
              level-appropriate practice.
            </p>
          </details>
          <details className="detail-accordion-item">
            <summary>Who usually enjoys it</summary>
            <ul>
              {audience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        </section>
      </div>
    </main>
  );
}
