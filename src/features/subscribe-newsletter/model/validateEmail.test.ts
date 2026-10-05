import { validateEmail } from './validateEmail';

describe('validateEmail', () => {
  it('requires a value', () => {
    expect(validateEmail('   ')).toBe('Please enter your email address.');
  });

  it.each(['plain', 'no@tld', '@example.com', 'a b@example.com'])('rejects "%s"', (value) => {
    expect(validateEmail(value)).toBe('Please enter a valid email address.');
  });

  it('accepts a valid address with surrounding spaces', () => {
    expect(validateEmail('  guest@royalpark.com ')).toBeNull();
  });
});
