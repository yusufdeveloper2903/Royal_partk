import eliteImage from '@/shared/assets/images/rooms/elite.png';
import luxImage from '@/shared/assets/images/rooms/lux.png';
import miniImage from '@/shared/assets/images/rooms/mini.png';
import singleImage from '@/shared/assets/images/rooms/single.png';
import standardImage from '@/shared/assets/images/rooms/standard.png';
import type { Room } from './types';

export const rooms: Room[] = [
  { id: 'lux', name: 'Lux Room', pricePerNight: 60, image: luxImage },
  { id: 'mini', name: 'Mini Room', pricePerNight: 70, image: miniImage },
  { id: 'standard', name: 'Standard Room', pricePerNight: 65, image: standardImage },
  { id: 'single', name: 'Single Room', pricePerNight: 35, image: singleImage },
  { id: 'elite', name: 'Elite Room', pricePerNight: 65, image: eliteImage },
];
