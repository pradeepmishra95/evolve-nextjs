'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useMemo, useState } from 'react';

import { BOOK_TRIAL_PATH, CONTACT_PHONE_NUMBER } from '@/lib/links';

import styles from './BookingForm.module.css';

type BookingFormState = {
  fullName: string;
  phoneNumber: string;
  email: string;
  programInterest: string;
  preferredTime: string;
  message: string;
};

const DEFAULT_STATE: BookingFormState = {
  fullName: '',
  phoneNumber: '',
  email: '',
  programInterest: 'Not sure yet',
  preferredTime: 'Morning (6AM–10AM)',
  message: '',
};

const phonePattern = /^[6-9]\d{9}$/;

export default function BookingForm() {
  const searchParams = useSearchParams();
  const coach = searchParams.get('coach');
  const program = searchParams.get('program');
  const time = searchParams.get('time');

  const [formState, setFormState] = useState<BookingFormState>({
    ...DEFAULT_STATE,
    programInterest: program || DEFAULT_STATE.programInterest,
    message: coach ? `I would like to train with ${coach}.` : time ? `Preferred batch: ${time}` : '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successData, setSuccessData] = useState<null | {
    fullName: string;
    programInterest: string;
  }>(null);

  const whatsappLink = useMemo(() => {
    if (!successData) {
      return '';
    }

    const text = `Hi, I am ${successData.fullName}. I just booked a trial for ${successData.programInterest}.`;

    return `https://wa.me/91${CONTACT_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [successData]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (!formState.fullName.trim()) {
      setError('Please enter your full name.');
      return;
    }

    if (!phonePattern.test(formState.phoneNumber.trim())) {
      setError('Please enter a valid 10-digit Indian phone number.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/book-trial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json();

      if (!response.ok || !payload.success) {
        throw new Error('Unable to book trial right now.');
      }

      setSuccessData({
        fullName: formState.fullName.trim(),
        programInterest: formState.programInterest,
      });
      setFormState(DEFAULT_STATE);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className={styles.successCard}>
        <p className={styles.successEyebrow}>Trial Request Sent</p>
        <h2>Thanks, {successData.fullName}.</h2>
        <p>
          Your trial request has been received. You can continue on WhatsApp if you want to
          confirm your preferred batch faster.
        </p>
        <div className={styles.successActions}>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="button-primary">
            Continue on WhatsApp
          </a>
          <Link href={BOOK_TRIAL_PATH} className="button-secondary" target="_blank" rel="noopener noreferrer">
            Book Another Trial
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Full name</span>
          <input
            type="text"
            name="fullName"
            required
            value={formState.fullName}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>

        <label className={styles.field}>
          <span>Phone number</span>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formState.phoneNumber}
            onChange={handleChange}
            inputMode="numeric"
            placeholder="10-digit number"
          />
        </label>

        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Optional"
          />
        </label>

        <label className={styles.field}>
          <span>Program interest</span>
          <select
            name="programInterest"
            value={formState.programInterest}
            onChange={handleChange}
          >
            <option>MMA</option>
            <option>Calisthenics</option>
            <option>Jumba (upcoming)</option>
            <option>Yoga (upcoming)</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label className={styles.field}>
          <span>Preferred time</span>
          <select name="preferredTime" value={formState.preferredTime} onChange={handleChange}>
            <option>Morning (6AM–10AM)</option>
            <option>Afternoon (10AM–2PM)</option>
            <option>Evening (5PM–10PM)</option>
          </select>
        </label>
      </div>

      <label className={`${styles.field} ${styles.fullWidth}`}>
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          placeholder="Share any goal, injury history, or preferred batch."
        />
      </label>

      {error ? <p className={styles.error}>{error}</p> : null}

      <div className={styles.footer}>
        <p>
          We’ll use this only to coordinate your trial, preferred timing, and follow-up.
        </p>
        <button type="submit" className={styles.submitButton} disabled={submitting}>
          {submitting ? 'Booking...' : 'Book My Trial'}
        </button>
      </div>
    </form>
  );
}
