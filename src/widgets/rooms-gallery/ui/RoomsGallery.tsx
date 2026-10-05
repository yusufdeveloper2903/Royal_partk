import { RoomCard, rooms } from '@/entities/room';
import { siteConfig, SECTION_IDS } from '@/shared/config';
import { Button, Container, SectionHeading } from '@/shared/ui';
import styles from './RoomsGallery.module.scss';

export const RoomsGallery = () => (
  <section id={SECTION_IDS.rooms} className={styles.section} aria-labelledby="rooms-title">
    <Container>
      <ul className={styles.grid} role="list">
        <li className={styles.intro}>
          <SectionHeading
            id="rooms-title"
            title="About hotel gallery"
            description="While some of these examples are real – actually offering guests a stay in the locations advertised – it’s mainly just a way."
          />
          <Button href={siteConfig.bookingHref}>View more</Button>
        </li>

        {rooms.map((room) => (
          <li key={room.id}>
            <RoomCard
              room={room}
              action={
                <Button href={siteConfig.bookingHref} size="sm" aria-label={`Book ${room.name}`}>
                  Book now
                </Button>
              }
            />
          </li>
        ))}
      </ul>
    </Container>
  </section>
);
