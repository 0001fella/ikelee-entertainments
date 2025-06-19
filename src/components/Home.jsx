import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Booking from './Booking';
import FAQ from './Faq';

import Contact from './Contact';


export default function Home() {
  return (
    <div className="font-sans bg-gray-100">
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="booking">
        <Booking />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      
      

      <section id="contact">
        <Contact />
      </section>

      
    </div>
  );
}