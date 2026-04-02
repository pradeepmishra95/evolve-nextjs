'use client';

import { useEffect } from 'react';

const SERVICE_WORKER_PATH = '/sw.js';

export default function PwaRegistrar() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return undefined;
    }

    if (!('serviceWorker' in navigator)) {
      return undefined;
    }

    const registerServiceWorker = () => {
      navigator.serviceWorker.register(SERVICE_WORKER_PATH, { scope: '/' }).catch(() => {});
    };

    if (document.readyState === 'complete') {
      registerServiceWorker();
      return undefined;
    }

    window.addEventListener('load', registerServiceWorker, { once: true });

    return () => {
      window.removeEventListener('load', registerServiceWorker);
    };
  }, []);

  return null;
}
