'use client';

import { FormEvent, useState } from 'react';

import styles from './NewsletterSignup.module.css';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error('Unable to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Email updates</span>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-label="Email address"
        />
      </label>
      <button type="submit" className={styles.button} disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Get Updates'}
      </button>
      {status === 'success' ? <p className={styles.success}>You are on the update list.</p> : null}
      {status === 'error' ? <p className={styles.error}>Please try again in a moment.</p> : null}
    </form>
  );
}
