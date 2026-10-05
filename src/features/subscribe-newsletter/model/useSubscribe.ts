import { useState, type FormEvent } from 'react';
import { subscribeToNewsletter } from '../api/subscribe';
import { validateEmail } from './validateEmail';

export type SubscribeStatus = 'idle' | 'submitting' | 'success' | 'error';

export const useSubscribe = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const changeEmail = (value: string) => {
    setEmail(value);
    if (status !== 'submitting') {
      setStatus('idle');
      setError(null);
    }
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationError = validateEmail(email);
    if (validationError) {
      setStatus('error');
      setError(validationError);
      return;
    }

    setStatus('submitting');
    setError(null);

    try {
      await subscribeToNewsletter(email.trim());
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again later.');
    }
  };

  return { email, status, error, changeEmail, submit };
};
