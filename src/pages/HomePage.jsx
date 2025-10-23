import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';

function HomePage() {
  return (
    <>
      {/* We use a React Fragment (<></>) to group all the sections.
        We also keep the 'id' attributes for our scroll links.
      */}
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about-summary"> {/* Renamed from 'about' to avoid conflicts */}
        <WhyChooseUs />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
    </>
  );
}

export default HomePage;