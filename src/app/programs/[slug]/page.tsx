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
    'Beginners who want to learn striking and grappling in a structured environment.',
    'People looking for conditioning that stays mentally engaging because it is skill-based.',
    'Students and working professionals who want a coached combat discipline, not random circuits.',
  ],
  calisthenics: [
    'Anyone who wants stronger fundamentals and visible progress through bodyweight training.',
    'People who enjoy learning movement patterns, holds, and control instead of machine-based routines.',
    'Students who want better mobility, posture, and strength without depending on complicated equipment.',
  ],
  zumba: [
    'People who enjoy high-energy group sessions with music, rhythm, and a social class feel.',
    'Anyone looking for a cardio-focused workout that feels more engaging than repetitive solo routines.',
    'Beginners who want an upbeat movement class with approachable intensity and fun group energy.',
  ],
  yoga: [
    'Anyone looking for better mobility, flexibility, and recovery through guided movement.',
    'People who want a calmer training format that still improves body control and consistency.',
    'Students and working professionals who need a restorative class to balance strength or combat training.',
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
      'Evolve MMA & Calisthenics',
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

        <section className="two-column">
          <article className="surface-panel" style={{ padding: '24px' }}>
            <p className="section-eyebrow">What To Expect</p>
            <div className="content-prose">
              <p>
                Every class is meant to feel coached, progressive, and manageable for the level
                you are currently at. The aim is not to overwhelm you with intensity for one
                session, but to make the discipline feel learnable enough to keep showing up.
              </p>
              <p>
                At Evolve, {program.shortName.toLowerCase()} sessions are built so that technique,
                timing, and repetition create confidence over time. That is what gives the training
                its long-term value.
              </p>
            </div>
          </article>
          <article className="surface-panel" style={{ padding: '24px' }}>
            <p className="section-eyebrow">Who Usually Enjoys It</p>
            <div className="content-prose">
              {audience.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
