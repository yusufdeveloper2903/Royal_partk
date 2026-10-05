import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubscribeForm } from './SubscribeForm';

describe('SubscribeForm', () => {
  it('shows a validation error for an invalid email', async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email address'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.');
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true');
  });

  it('confirms the subscription and clears the input', async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email address'), 'guest@royalpark.com');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(await screen.findByText('Thank you for subscribing!')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toHaveValue('');
  });
});
