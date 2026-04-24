import TypicalSections from '@/components/about/sections/TypicalSections';
import TestimonialCarousel from '@/components/about/sections/TestimonialCarousel';
import { typicalSections } from '@/components/about/data/sectionData';
import { testimonials } from '@/components/about/data/testimonialData';
import Section1 from '@/components/about/sections/Section1';
import Section2 from '@/components/about/sections/Section2';
import Section6 from '@/components/about/sections/Section6';
import Section7 from '@/components/about/sections/Section7';
import Section8 from '@/components/about/sections/Section8';
import Section9 from '@/components/about/sections/Section9';
export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Section1 />
        <Section2 />
      </section>
          {/* Typical Sections */}
          <TypicalSections {...typicalSections[0]} />
          <TypicalSections {...typicalSections[1]} />
          <TypicalSections {...typicalSections[2]} />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      {/* Testimonial Carousel */}
      <TestimonialCarousel testimonials={testimonials} />
    </main>
  );
}
