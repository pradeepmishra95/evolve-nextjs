import Link from 'next/link';

export const metadata = {
  title: 'Offline',
  robots: {
    index: false,
    follow: false,
  },
};

const wrapperStyle = {
  minHeight: 'calc(100svh - 88px)',
  display: 'grid',
  placeItems: 'center',
  padding: '48px 24px',
  background:
    'radial-gradient(circle at top right, rgba(255, 106, 0, 0.16), transparent 24%), linear-gradient(180deg, #111923, #090d14)',
};

const cardStyle = {
  width: 'min(100%, 640px)',
  padding: '32px',
  borderRadius: '28px',
  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 24px 50px rgba(9, 13, 20, 0.24)',
  color: '#f7f4ef',
};

const eyebrowStyle = {
  margin: '0 0 12px',
  color: '#ffb060',
  fontSize: '0.84rem',
  fontWeight: 800,
  letterSpacing: '0.16em',
  textTransform: 'uppercase',
};

const titleStyle = {
  margin: 0,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  lineHeight: 1,
};

const copyStyle = {
  margin: '18px 0 0',
  color: 'rgba(247, 244, 239, 0.76)',
  lineHeight: 1.8,
};

const actionStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '48px',
  padding: '0 22px',
  marginTop: '24px',
  borderRadius: '999px',
  background: 'linear-gradient(135deg, #ff9b27, #ff6a00)',
  color: '#fff',
  fontWeight: 800,
  textDecoration: 'none',
};

export default function OfflinePage() {
  return (
    <main style={wrapperStyle}>
      <section style={cardStyle}>
        <p style={eyebrowStyle}>Offline</p>
        <h1 style={titleStyle}>You are offline right now.</h1>
        <p style={copyStyle}>
          The app shell is available, but this page could not reach the latest
          network content. Once you are back online, reload to continue browsing
          the full site.
        </p>
        <Link href="/" style={actionStyle}>
          Return Home
        </Link>
      </section>
    </main>
  );
}
