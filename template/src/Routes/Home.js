import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header data={props.resumeData.main} />
        <About data={props.resumeData.main} />
        <Resume data={props.resumeData.resume} />
        <Portfolio data={props.resumeData.portfolio} />
        <Testimonials data={props.resumeData.testimonials} />
        <Contact data={props.resumeData.main} />
        <Footer data={props.resumeData.main} />
      </div>
    );
  }
}

export default Home;
