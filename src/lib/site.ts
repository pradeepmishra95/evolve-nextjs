const PRODUCTION_SITE_URL = 'https://www.evolvemmaandcalisthenics.com';

function normalizeSiteUrl(value?: string | null) {
  if (!value) {
    return PRODUCTION_SITE_URL;
  }

  const trimmed = value.trim().replace(/\/+$/, '');

  if (!trimmed) {
    return PRODUCTION_SITE_URL;
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    PRODUCTION_SITE_URL
);

export const SITE_URL_OBJECT = new URL(SITE_URL);

export function buildAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}
