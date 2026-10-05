import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './Header';

describe('Header', () => {
  it('renders every navigation link', () => {
    render(<Header />);

    const nav = screen.getByRole('navigation', { name: 'Main' });
    expect(nav).toHaveTextContent(/Home.*Features.*Gallery.*Testimonials/);
  });

  it('toggles the mobile menu and closes it on Escape', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const burger = screen.getByRole('button', { name: 'Open menu' });
    expect(burger).toHaveAttribute('aria-expanded', 'false');

    await user.click(burger);
    expect(burger).toHaveAttribute('aria-expanded', 'true');
    expect(burger).toHaveAccessibleName('Close menu');

    await user.keyboard('{Escape}');
    expect(burger).toHaveAttribute('aria-expanded', 'false');
  });
});
