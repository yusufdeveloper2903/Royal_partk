const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Returns an error message, or `null` when the email is valid. */
export const validateEmail = (value: string): string | null => {
  const email = value.trim();

  if (!email) return 'Please enter your email address.';
  if (!EMAIL_PATTERN.test(email)) return 'Please enter a valid email address.';

  return null;
};
