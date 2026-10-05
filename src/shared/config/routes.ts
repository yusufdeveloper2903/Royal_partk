/** In-page anchors. Single source of truth for section ids and the links pointing at them. */
export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  features: 'features',
  rooms: 'rooms',
  testimonials: 'testimonials',
  newsletter: 'newsletter',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const anchor = (id: SectionId) => `#${id}` as const;
