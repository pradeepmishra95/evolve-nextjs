export const metadata = {
  title: 'Gallery Updates Coming Soon',
  description:
    'Gallery updates for Evolve MMA & Calisthenics are coming soon. Visit Instagram for the latest training visuals.',
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
        Visual updates from the training center are coming here next.
      </h1>

      <p
        style={{
          margin: '18px 0 0',
          maxWidth: '48ch',
          color: '#596170',
          lineHeight: 1.8,
        }}
      >
        This page will soon host real photos, training moments, and community
        updates from the floor. For now, the latest visuals are available on
        Instagram and through direct trial visits.
      </p>
    </section>
  );
}
