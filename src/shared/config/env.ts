export const env = {
  subscribeUrl: import.meta.env.VITE_SUBSCRIBE_URL?.trim() || null,
} as const;
