import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Routes/About';
import Resume from './Routes/Resume';
import Contact from './Routes/Contact';
import Testimonials from './Routes/Testimonials';
import Portfolio from './Routes/Portfolio';
import NotFound from './Components/NotFound';

export default (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/Testimonials" component={Testimonials} />
      <Route exact path="/Contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </React.Fragment>
);
