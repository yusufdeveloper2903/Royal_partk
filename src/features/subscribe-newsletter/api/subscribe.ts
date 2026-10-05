import { env } from '@/shared/config';

/**
 * Sends the email to the configured subscription endpoint.
 * Without `VITE_SUBSCRIBE_URL` there is no backend yet, so the request is a no-op.
 */
export const subscribeToNewsletter = async (email: string): Promise<void> => {
  if (!env.subscribeUrl) return;

  const response = await fetch(env.subscribeUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    throw new Error(`Subscription failed with status ${response.status}`);
  }
};
