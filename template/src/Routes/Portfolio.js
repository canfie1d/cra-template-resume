import { useContext } from 'react';
import { Context } from '../Contexts/AppStore';

const Portfolio = () => {
  const [state] = useContext(Context);

  const renderProjects = () => {
    return state.portfolio.projects.map((projects) => {
      var projectImage = '../Assets/images/portfolio/' + projects.image;

      return (
        <div key={projects.title} className='columns portfolio-item'>
          <div className='item-wrap'>
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className='overlay'>
                <div className='portfolio-item-meta'>
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className='link-icon'>
                <i className='fa fa-link'></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <section id='portfolio'>
      <div className='row'>
        <div className='twelve columns collapsed'>
          <h1>Check Out Some of My Work.</h1>
          <div
            id='portfolio-wrapper'
            className='bgrid-quarters s-bgrid-thirds cf'
          >
            {renderProjects()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
