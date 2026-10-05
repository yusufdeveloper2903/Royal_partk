import { TestimonialCard, testimonials } from '@/entities/testimonial';
import { SECTION_IDS } from '@/shared/config';
import { Button, Container, SectionHeading } from '@/shared/ui';
import styles from './Testimonials.module.scss';

export const Testimonials = () => (
  <section
    id={SECTION_IDS.testimonials}
    className={styles.section}
    aria-labelledby="testimonials-title"
  >
    <Container>
      <div className={styles.header}>
        <SectionHeading id="testimonials-title" title="What our clients say" />
        <Button>View all</Button>
      </div>

      <ul className={styles.grid} role="list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
