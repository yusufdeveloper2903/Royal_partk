import { About } from '@/widgets/about';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Newsletter } from '@/widgets/newsletter';
import { RoomsGallery } from '@/widgets/rooms-gallery';
import { Testimonials } from '@/widgets/testimonials';
import { WhyChooseUs } from '@/widgets/why-choose-us';

export const HomePage = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <RoomsGallery />
      <Testimonials />
      <Newsletter />
    </main>
    <Footer />
  </>
);
