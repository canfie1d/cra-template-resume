import { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Context } from '../Contexts/AppStore';

const Testimonials = (props) => {
  const [state] = useContext(Context);

  const renderTestimonials = () => {
    if (state.testimonials) {
      return state.testimonials.map((testimonial) => {
        return (
          <li key={testimonial.user}>
            <blockquote>
              <p>{testimonial.text}</p>
              <cite>{testimonial.user}</cite>
            </blockquote>
          </li>
        );
      });
    }
  };

  return (
    <Route
      path={props.paths}
      render={() => (
        <section id='testimonials'>
          <div className='text-container'>
            <div className='row'>
              <div className='two columns header-col'>
                <h1>
                  <span>Client Testimonials</span>
                </h1>
              </div>
              <div className='ten columns flex-container'>
                <ul className='slides'>{renderTestimonials()}</ul>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Testimonials;
