import React from 'react';
import Banner from './Banner';
import About from './About';
import Vision from './Vison';
import Contact from './Contact';
import Products from './Products';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <section id="section-1">
        <Banner />
      </section>
      <section id="section-2">
        <About />
      </section>
      <section id="section-3">
        <Vision />
      </section>
      <section id="section-4">
        <Products />
      </section>
      <section id="section-5">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default Home
