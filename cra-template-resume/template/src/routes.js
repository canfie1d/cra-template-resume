import React from 'react';
import { Route, Switch } from 'react-router';

// PAGES
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import NotFound from './Components/NotFound';

export default (
  <React.Fragment>
    <Header data={props.resumeData.main} />
    <Switch>
      <Route exact path="/" component={About} data={props.resumeData.main} />
      <Route exact path="/resume" component={Resume} data={props.resumeData.resume} />
      <Route exact path="/portfolio" component={Portfolio} data={props.resumeData.portfolio} />
      <Route exact path="/Testimonials" component={Testimonials} data={props.resumeData.testimonials} />
      <Route exact path="/Contact" component={Contact} data={props.resumeData.main} />
      <Route component={NotFound} />
    </Switch>
    <Footer data={props.resumeData.main} />
  </React.Fragment>
);
