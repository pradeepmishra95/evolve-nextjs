const LOCAL_SITE_URL = 'http://localhost:3000';

function normalizeSiteUrl(value) {
  if (!value) {
    return LOCAL_SITE_URL;
  }

  const trimmed = value.trim().replace(/\/+$/, '');

  if (!trimmed) {
    return LOCAL_SITE_URL;
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL
);

export const SITE_URL_OBJECT = new URL(SITE_URL);
