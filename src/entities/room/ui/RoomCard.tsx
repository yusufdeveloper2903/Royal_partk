import type { ReactNode } from 'react';
import { formatPrice } from '../lib/formatPrice';
import type { Room } from '../model/types';
import styles from './RoomCard.module.scss';

type RoomCardProps = {
  room: Room;
  /** Slot for actions (e.g. a booking button) — keeps the entity free of feature logic. */
  action?: ReactNode;
};

export const RoomCard = ({ room, action }: RoomCardProps) => (
  <article className={styles.card}>
    <img
      className={styles.image}
      src={room.image}
      alt={room.name}
      width={555}
      height={337}
      loading="lazy"
      decoding="async"
    />
    <div className={styles.panel}>
      <h3 className={styles.title}>
        {room.name}
        <span className={styles.price}>
          {formatPrice(room.pricePerNight)}
          <span className={styles.unit}> / night</span>
        </span>
      </h3>
      {action}
    </div>
  </article>
);
