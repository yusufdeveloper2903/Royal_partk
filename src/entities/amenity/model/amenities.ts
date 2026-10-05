import easyBookingIcon from '@/shared/assets/images/features/easy-booking.png';
import friendlyInterfaceIcon from '@/shared/assets/images/features/friendly-interface.png';
import quickSupplyIcon from '@/shared/assets/images/features/quick-supply.png';
import responsibilityIcon from '@/shared/assets/images/features/responsibility.png';
import type { Amenity } from './types';

export const amenities: Amenity[] = [
  {
    id: 'easy-booking',
    title: 'Easy booking',
    description: 'The booking process should include minimal steps.',
    icon: easyBookingIcon,
  },
  {
    id: 'friendly-interface',
    title: 'Friendly interface',
    description: 'A hotel booking engine with a good user-friendly.',
    icon: friendlyInterfaceIcon,
  },
  {
    id: 'responsibility',
    title: 'Responsibility',
    description: 'You should be able to add rooms to your system.',
    icon: responsibilityIcon,
  },
  {
    id: 'quick-order-supply',
    title: 'Quick order supply',
    description: 'The booking process should include minimal steps.',
    icon: quickSupplyIcon,
  },
];
