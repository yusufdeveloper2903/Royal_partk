import aboutMain from '@/shared/assets/images/about/about-main.png';
import aboutSecondary from '@/shared/assets/images/about/about-secondary.png';
import playIcon from '@/shared/assets/images/about/play.svg';
import { anchor, SECTION_IDS } from '@/shared/config';
import { Button, Container, SectionHeading } from '@/shared/ui';
import styles from './About.module.scss';

export const About = () => (
  <section id={SECTION_IDS.about} className={styles.about} aria-labelledby="about-title">
    <Container className={styles.inner}>
      <div className={styles.media}>
        <img
          className={styles.secondary}
          src={aboutSecondary}
          alt=""
          width={484}
          height={268}
          loading="lazy"
        />
        <img
          className={styles.main}
          src={aboutMain}
          alt="Hand ringing a hotel reception bell"
          width={630}
          height={325}
          loading="lazy"
        />
        {/* Decorative until a tour video exists; turn into a <button> that opens it then. */}
        <img className={styles.play} src={playIcon} alt="" width={100} height={100} />
      </div>

      <div className={styles.content}>
        <SectionHeading
          id="about-title"
          eyebrow="Dream holidays"
          title="Enjoy unforgettable experiences in dream hotels."
        />
        <Button href={anchor(SECTION_IDS.rooms)}>View more</Button>
      </div>
    </Container>
  </section>
);
