import Link from 'next/link';

import { BOOK_TRIAL_PATH } from '@/lib/links';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata({
  title: 'Calisthenics Gym in Mumbai | Bodyweight Strength Training | Evolve Malad',
  description:
    'Looking for a calisthenics gym in Mumbai? Learn how bodyweight strength training works at Evolve in Malad West, what beginners can expect, and how to book a trial.',
  path: '/calisthenics-gym-mumbai',
  keywords: [
    'calisthenics gym Mumbai',
    'bodyweight strength Malad West',
    'calisthenics classes Mumbai',
    'Evolve calisthenics',
  ],
});

export default function CalisthenicsGymMumbaiPage() {
  return (
    <main className="site-section site-section-dark">
      <div className="site-shell section-stack">
        <section className="page-copy page-hero">
          <p className="section-eyebrow">Calisthenics</p>
          <h1 className="section-heading">Calisthenics Gym in Mumbai</h1>
          <p className="section-lead">
            People searching for a calisthenics gym in Mumbai are often looking for more than a
            room with bars. They want coaching that helps them move from assisted basics to real
            strength progressions without wasting months guessing. That is the difference between
            a training center that looks good on Instagram and one that actually helps students
            build body control. At Evolve in Malad West, calisthenics is taught as a progression:
            push, pull, brace, hang, hold, and move with more quality each month.
          </p>
        </section>

        <section className="content-prose">
          <h2>What is calisthenics training?</h2>
          <p>
            Calisthenics is bodyweight strength training built around leverage, control, mobility,
            and repeatable skill progressions. It includes pulling, pushing, core work, hanging,
            support work, and eventually more advanced elements like muscle-ups, handstands, or
            static holds. The real value of calisthenics is that it teaches strength you can feel
            in your body, not just numbers on a machine.
          </p>
          <h2>What to expect in your first class</h2>
          <p>
            A good first class should not throw you into advanced skills for the sake of looking
            impressive. Most beginners need movement prep, shoulder and wrist awareness, assisted
            pulling patterns, clean push work, and simple bodyline control before higher-level
            skills make sense. At Evolve, the aim is to help you understand what your current
            base looks like and where your first useful progression begins.
          </p>
          <h2>Who calisthenics is for</h2>
          <p>
            Calisthenics works well for students, working professionals, and anyone who wants a
            technical strength practice rather than repetitive machine work. Some join to build
            visible upper-body strength. Others want mobility, posture, and better coordination.
            Beginners are absolutely welcome, provided the class is coached with progression in
            mind. That is why the teaching approach matters so much.
          </p>
          <h2>Batch timings and why a trial helps</h2>
          <p>
            Evolve offers batch timings that make bodyweight training realistic around weekday
            routines. A trial visit is useful because it shows you whether the coaching, class
            pace, and level of attention feel right. If you have been curious about calisthenics
            but unsure where to begin, one guided class can remove a lot of hesitation.
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
