import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

// PAGES
import About from './Routes/About';
import Resume from './Routes/Resume';
import Contact from './Routes/Contact';
import Testimonials from './Routes/Testimonials';
import Portfolio from './Routes/Portfolio';

const paths = [
  '',
  '#home',
  '#about',
  '#resume',
  '#portfolio',
  '#testimonials',
  '#contact',
];

export default (
  <React.Fragment>
    <Header />
    <About paths={paths} />
    <Resume paths={paths} />
    <Portfolio paths={paths} />
    <Testimonials paths={paths} />
    <Contact paths={paths} />
    <Footer paths={paths} />
  </React.Fragment>
);
