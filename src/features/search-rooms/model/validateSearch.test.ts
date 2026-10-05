import { validateSearch } from './validateSearch';

const today = '2026-10-05';

describe('validateSearch', () => {
  it('passes for a valid stay', () => {
    expect(
      validateSearch({ checkIn: today, checkOut: '2026-10-08', guests: '2-1' }, today),
    ).toEqual({});
  });

  it('rejects a check-in date in the past', () => {
    expect(
      validateSearch({ checkIn: '2026-10-04', checkOut: '2026-10-08', guests: '2-1' }, today),
    ).toEqual({ checkIn: 'Check-in cannot be in the past.' });
  });

  it('rejects a check-out that is not after check-in', () => {
    expect(validateSearch({ checkIn: today, checkOut: today, guests: '2-1' }, today)).toEqual({
      checkOut: 'Check-out must be after check-in.',
    });
  });

  it('requires both dates', () => {
    expect(validateSearch({ checkIn: '', checkOut: '', guests: '2-1' }, today)).toEqual({
      checkIn: 'Select a check-in date.',
      checkOut: 'Select a check-out date.',
    });
  });
});
