import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

// PAGES
import About from './Routes/About';
import Resume from './Routes/Resume';
import Contact from './Routes/Contact';
import Testimonials from './Routes/Testimonials';
import Portfolio from './Routes/Portfolio';

export default (
  <React.Fragment>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
  </React.Fragment>
);
