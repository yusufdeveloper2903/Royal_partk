import { SearchRoomsForm } from '@/features/search-rooms';
import { anchor, SECTION_IDS } from '@/shared/config';
import { Button, Container } from '@/shared/ui';
import styles from './Hero.module.scss';

const scrollToRooms = () => {
  document.getElementById(SECTION_IDS.rooms)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => (
  <section id={SECTION_IDS.home} className={styles.hero} aria-labelledby="hero-title">
    <Container className={styles.inner}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Serenity</p>
        <h1 id="hero-title" className={styles.title}>
          Stay with us feel like <span className={styles.accent}>home</span>.
        </h1>
        <p className={styles.text}>
          Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t
          bear to be parted.
        </p>
        <Button href={anchor(SECTION_IDS.about)}>Read more</Button>
      </div>

      <SearchRoomsForm className={styles.search} onSearch={scrollToRooms} />
    </Container>
  </section>
);
