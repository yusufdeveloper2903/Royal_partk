import { useId } from 'react';
import { Button } from '@/shared/ui';
import { cn } from '@/shared/lib';
import { useSubscribe } from '../model/useSubscribe';
import styles from './SubscribeForm.module.scss';

type SubscribeFormProps = {
  className?: string;
};

export const SubscribeForm = ({ className }: SubscribeFormProps) => {
  const { email, status, error, changeEmail, submit } = useSubscribe();
  const inputId = useId();
  const messageId = useId();

  const isSubmitting = status === 'submitting';
  const message = status === 'success' ? 'Thank you for subscribing!' : error;

  return (
    <form className={cn(styles.form, className)} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor={inputId} className={styles.label}>
          Email address
        </label>
        <input
          id={inputId}
          className={styles.input}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => changeEmail(event.target.value)}
          aria-invalid={status === 'error'}
          aria-describedby={message ? messageId : undefined}
          disabled={isSubmitting}
          required
        />
        <Button type="submit" className={styles.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Subscribe'}
        </Button>
      </div>
      <p
        id={messageId}
        className={cn(styles.message, status === 'success' ? styles.success : styles.error)}
        role={status === 'error' ? 'alert' : 'status'}
      >
        {message}
      </p>
    </form>
  );
};
