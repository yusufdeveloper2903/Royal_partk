import { SubscribeForm } from '@/features/subscribe-newsletter';
import { SECTION_IDS } from '@/shared/config';
import { Container, SectionHeading } from '@/shared/ui';
import styles from './Newsletter.module.scss';

export const Newsletter = () => (
  <section
    id={SECTION_IDS.newsletter}
    className={styles.section}
    aria-labelledby="newsletter-title"
  >
    <Container className={styles.inner}>
      <SectionHeading
        id="newsletter-title"
        align="center"
        eyebrow="Stay in touch"
        title="Join our email. First to know about specials, events and more!"
      />
      <SubscribeForm />
    </Container>
  </section>
);
