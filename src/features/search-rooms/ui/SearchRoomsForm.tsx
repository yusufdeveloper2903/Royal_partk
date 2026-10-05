import { useId, useState, type FormEvent } from 'react';
import { addDays, cn, toISODate } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { DEFAULT_GUESTS, guestOptions } from '../model/guestOptions';
import type { SearchCriteria, SearchErrors } from '../model/types';
import { validateSearch } from '../model/validateSearch';
import styles from './SearchRoomsForm.module.scss';

type SearchRoomsFormProps = {
  onSearch: (criteria: SearchCriteria) => void;
  className?: string;
};

export const SearchRoomsForm = ({ onSearch, className }: SearchRoomsFormProps) => {
  const id = useId();
  const [today] = useState(() => toISODate(new Date()));
  const [criteria, setCriteria] = useState<SearchCriteria>(() => ({
    checkIn: today,
    checkOut: toISODate(addDays(new Date(), 3)),
    guests: DEFAULT_GUESTS,
  }));
  const [errors, setErrors] = useState<SearchErrors>({});

  const update = (field: keyof SearchCriteria, value: string) => {
    setCriteria((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateSearch(criteria, today);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) onSearch(criteria);
  };

  const fieldId = (name: keyof SearchCriteria) => `${id}-${name}`;
  const errorId = (name: keyof SearchCriteria) => `${id}-${name}-error`;

  const renderError = (name: keyof SearchCriteria) =>
    errors[name] && (
      <span id={errorId(name)} className={styles.error} role="alert">
        {errors[name]}
      </span>
    );

  return (
    <form
      className={cn(styles.form, className)}
      onSubmit={handleSubmit}
      aria-label="Search rooms"
      noValidate
    >
      <div className={styles.field}>
        <label htmlFor={fieldId('checkIn')} className={styles.label}>
          Check in
        </label>
        <input
          id={fieldId('checkIn')}
          className={styles.control}
          type="date"
          min={today}
          value={criteria.checkIn}
          onChange={(event) => update('checkIn', event.target.value)}
          aria-invalid={Boolean(errors.checkIn)}
          aria-describedby={errors.checkIn ? errorId('checkIn') : undefined}
          required
        />
        {renderError('checkIn')}
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId('checkOut')} className={styles.label}>
          Check out
        </label>
        <input
          id={fieldId('checkOut')}
          className={styles.control}
          type="date"
          min={criteria.checkIn || today}
          value={criteria.checkOut}
          onChange={(event) => update('checkOut', event.target.value)}
          aria-invalid={Boolean(errors.checkOut)}
          aria-describedby={errors.checkOut ? errorId('checkOut') : undefined}
          required
        />
        {renderError('checkOut')}
      </div>

      <div className={styles.field}>
        <label htmlFor={fieldId('guests')} className={styles.label}>
          Person
        </label>
        <select
          id={fieldId('guests')}
          className={styles.control}
          value={criteria.guests}
          onChange={(event) => update('guests', event.target.value)}
        >
          {guestOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <Button type="submit" className={styles.submit}>
        Find room
      </Button>
    </form>
  );
};
