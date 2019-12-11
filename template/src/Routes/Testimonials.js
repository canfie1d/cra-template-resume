import React from 'react';
import { useSelector } from 'react-redux'

const Testimonials = () => {
  const data = useSelector(state => state.resumeData.data);

  const renderTestimonials = () => {
    if (data.testimonials && data.testimonials.testimonials) {
      return data.testimonials.testimonials.map(testimonial => {
        return (
          <li key={testimonial.user}>
            <blockquote>
              <p>{testimonial.text}</p>
              <cite>{testimonial.user}</cite>
            </blockquote>
          </li>
        );
      })
    }
  }

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1><span>Client Testimonials</span></h1>
          </div>
          <div className="ten columns flex-container">
            <ul className="slides">
              {renderTestimonials()}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
