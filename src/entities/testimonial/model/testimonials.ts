import davidLeeAvatar from '@/shared/assets/images/testimonials/david-lee.png';
import raviShankorAvatar from '@/shared/assets/images/testimonials/ravi-shankor.png';
import thomasLewAvatar from '@/shared/assets/images/testimonials/thomas-lew.png';
import type { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 'david-lee',
    author: 'David Lee',
    handle: 'davidlee@',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
    avatar: davidLeeAvatar,
  },
  {
    id: 'ravi-shankor',
    author: 'Ravi Shankor',
    handle: 'ravishankor@',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
    avatar: raviShankorAvatar,
  },
  {
    id: 'thomas-lew',
    author: 'Thomas Lew',
    handle: 'thomaslew@',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Ultrices.',
    avatar: thomasLewAvatar,
  },
];
