import Link from 'next/link';

import { BOOK_TRIAL_PATH } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'MMA Classes in Malad West, Mumbai | Beginner to Advanced | Evolve',
  description:
    'Explore beginner to advanced MMA classes in Malad West, Mumbai at Evolve. Learn what to expect, who MMA training is for, and how to book your first class.',
  path: '/mma-classes-malad-west',
  keywords: [
    'MMA classes in Malad West Mumbai',
    'beginner MMA Malad West',
    'MMA training Mumbai',
    'Evolve MMA classes',
  ],
});

export default function MmaClassesMaladWestPage() {
  return (
    <main className="site-section site-section-dark">
      <div className="site-shell section-stack">
        <section className="page-copy page-hero">
          <p className="section-eyebrow">MMA Classes</p>
          <h1 className="section-heading">MMA Classes in Malad West, Mumbai</h1>
          <p className="section-lead">
            If you are looking for MMA classes in Malad West, the most helpful question is not
            just whether a center offers striking and grappling. It is whether the classes are
            structured well enough for a beginner to settle in and for an experienced trainee to
            keep improving. At Evolve, MMA is taught as a discipline with its own logic, not as
            a random mix of exhausting drills. That matters because people stay longer when they
            can understand why they are doing something and how it fits into the bigger picture.
          </p>
        </section>

        <section className="content-prose">
          <h2>What is MMA training?</h2>
          <p>
            MMA training combines striking, grappling, conditioning, movement, and positional
            awareness into one practice. In a good class, you are not expected to master all of
            that at once. Instead, the coach breaks the class down into manageable layers:
            stance, footwork, pad work, partner drills, defensive reactions, ground positions,
            and conditioning that supports the skill work rather than distracting from it.
          </p>
          <h2>What to expect in your first class</h2>
          <p>
            Your first MMA class should feel guided. You can expect a warm-up that prepares your
            joints and movement patterns, then technique work that introduces a few clear ideas
            instead of flooding you with information. A beginner-friendly MMA class in Mumbai
            should leave you feeling challenged but not lost. At Evolve, the first visit is also
            about helping you understand class pace, batch fit, and the room itself before you
            make a bigger commitment.
          </p>
          <h2>Who MMA classes are for</h2>
          <p>
            MMA is for more people than most beginners assume. Some students join because they
            want combat sports skill. Others are drawn to the conditioning, confidence, and
            discipline that comes from learning a technical practice. Working professionals,
            students, and first-time trainees often do well when the coaching is clear and the
            schedule is realistic. You do not need a fight background to start. You do need a
            place where questions are welcome and progress feels trackable.
          </p>
          <h2>Batch timings and the next step</h2>
          <p>
            Evolve runs morning and evening training windows in Malad West so people can fit
            training around work, college, and commuting. If you are unsure whether MMA is the
            right starting point, a trial is the fastest way to find out. You get to see the
            coaching quality, training atmosphere, and pace of class for yourself instead of
            guessing from social content alone.
          </p>
        </section>

        <div className="page-actions">
          <Link href={BOOK_TRIAL_PATH} className="button-primary" target="_blank" rel="noopener noreferrer">
            Book A Trial
          </Link>
          <Link href="/timings" className="button-secondary">
            View Batch Timings
          </Link>
        </div>
      </div>
    </main>
  );
}
