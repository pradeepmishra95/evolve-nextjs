import { INSTAGRAM_PROFILE_URL } from '@/lib/links';

export const metadata = {
  title: 'Training Gallery',
  description:
    'See current training visuals from Evolve Sports And Fitness Club through the official Instagram profile.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function Gallery() {
  return (
    <section
      style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '88px 24px 96px',
        color: '#111418',
        background: '#f4f1ea',
        minHeight: 'calc(100svh - 88px)',
      }}
    >
      <p
        style={{
          margin: 0,
          color: '#c65905',
          fontSize: '0.84rem',
          fontWeight: 800,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
        }}
      >
        Gallery
      </p>

      <h1
        style={{
          margin: '12px 0 0',
          maxWidth: '14ch',
          fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
          lineHeight: 1.02,
        }}
      >
        See current training moments from the official source.
      </h1>

      <p
        style={{
          margin: '18px 0 0',
          maxWidth: '48ch',
          color: '#596170',
          lineHeight: 1.8,
        }}
      >
        We only publish training photos after they are ready for public use. For current
        session visuals and updates from the floor, visit the official Instagram profile
        or book a trial to see the center in person.
      </p>

      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          marginTop: 24,
          minHeight: 48,
          alignItems: 'center',
          padding: '0 22px',
          borderRadius: 999,
          color: '#fff',
          background: 'linear-gradient(135deg, #ff9b27, #ff6a00)',
          fontWeight: 800,
          textDecoration: 'none',
        }}
      >
        View Official Instagram
      </a>
    </section>
  );
}
