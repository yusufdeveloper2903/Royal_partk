import { AmenityCard, amenities } from '@/entities/amenity';
import { SECTION_IDS } from '@/shared/config';
import { Container, SectionHeading } from '@/shared/ui';
import styles from './WhyChooseUs.module.scss';

export const WhyChooseUs = () => (
  <section id={SECTION_IDS.features} className={styles.section} aria-labelledby="features-title">
    <Container>
      <SectionHeading
        id="features-title"
        align="center"
        title="Why choose us!"
        description="Naturally, it’s becoming even more important for hotel and hospitality brands to stand out from the crowd. Content marketing remains a key way for hotels to do this."
      />
      <ul className={styles.grid} role="list">
        {amenities.map((amenity) => (
          <li key={amenity.id}>
            <AmenityCard amenity={amenity} />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
