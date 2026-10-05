import type { Amenity } from '../model/types';
import styles from './AmenityCard.module.scss';

type AmenityCardProps = {
  amenity: Amenity;
};

export const AmenityCard = ({ amenity }: AmenityCardProps) => (
  <article className={styles.card}>
    <img className={styles.icon} src={amenity.icon} alt="" width={74} height={74} loading="lazy" />
    <h3 className={styles.title}>{amenity.title}</h3>
    <p className={styles.description}>{amenity.description}</p>
  </article>
);
