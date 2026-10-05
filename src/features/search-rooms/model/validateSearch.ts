import type { SearchCriteria, SearchErrors } from './types';

/** ISO dates (`YYYY-MM-DD`) compare correctly as strings. */
export const validateSearch = (
  { checkIn, checkOut }: SearchCriteria,
  today: string,
): SearchErrors => {
  const errors: SearchErrors = {};

  if (!checkIn) errors.checkIn = 'Select a check-in date.';
  else if (checkIn < today) errors.checkIn = 'Check-in cannot be in the past.';

  if (!checkOut) errors.checkOut = 'Select a check-out date.';
  else if (checkIn && checkOut <= checkIn) errors.checkOut = 'Check-out must be after check-in.';

  return errors;
};
