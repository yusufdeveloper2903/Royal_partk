import facebookIcon from '@/shared/assets/images/social/facebook.png';
import googleIcon from '@/shared/assets/images/social/google.png';
import instagramIcon from '@/shared/assets/images/social/instagram.png';
import twitterIcon from '@/shared/assets/images/social/twitter.png';
import { anchor, SECTION_IDS } from './routes';

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = NavLink & {
  icon: string;
};

export type FooterColumn = {
  title: string;
  links: NavLink[];
};

export const siteConfig = {
  name: 'Royal Park',
  tagline: 'Travel deals on hotels, flights, vacation packages.',
  contactHandle: '@shovasatkhira88.com',

  navigation: [
    { label: 'Home', href: anchor(SECTION_IDS.home) },
    { label: 'Features', href: anchor(SECTION_IDS.features) },
    { label: 'Gallery', href: anchor(SECTION_IDS.rooms) },
    { label: 'Testimonials', href: anchor(SECTION_IDS.testimonials) },
  ] satisfies NavLink[],

  bookingHref: anchor(SECTION_IDS.rooms),

  socials: [
    { label: 'Facebook', href: 'https://facebook.com', icon: facebookIcon },
    { label: 'Instagram', href: 'https://instagram.com', icon: instagramIcon },
    { label: 'Twitter', href: 'https://twitter.com', icon: twitterIcon },
    { label: 'Google', href: 'https://google.com', icon: googleIcon },
  ] satisfies SocialLink[],

  footerColumns: [
    {
      title: 'Home',
      links: [
        { label: 'Accessibility', href: '#' },
        { label: 'Certification', href: '#' },
        { label: 'Knowledge', href: '#' },
      ],
    },
    {
      title: 'Pages',
      links: [
        { label: 'Blogs', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Community', href: '#' },
      ],
    },
  ] satisfies FooterColumn[],
} as const;
