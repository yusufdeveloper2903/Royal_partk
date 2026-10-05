import quoteIcon from '@/shared/assets/images/testimonials/quote.png';
import type { Testimonial } from '../model/types';
import styles from './TestimonialCard.module.scss';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => (
  <figure className={styles.card}>
    <div className={styles.avatarWrapper}>
      <img
        className={styles.avatar}
        src={testimonial.avatar}
        alt=""
        width={100}
        height={100}
        loading="lazy"
      />
      <img className={styles.quoteIcon} src={quoteIcon} alt="" width={24} height={21} />
    </div>
    <blockquote className={styles.quote}>
      <p>{testimonial.quote}</p>
    </blockquote>
    <figcaption className={styles.caption}>
      <span className={styles.author}>{testimonial.author}</span>
      <span className={styles.handle}>{testimonial.handle}</span>
    </figcaption>
  </figure>
);
