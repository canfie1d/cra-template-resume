import { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Context } from '../Contexts/AppStore';

const Portfolio = (props) => {
  const [state] = useContext(Context);
  const images = require.context('../Assets/images/portfolio/', true);

  const renderProjects = () => {
    return state.portfolio.projects.map((project) => {
      let projectImage = images(`./${project.image}`).default;

      return (
        <div key={project.title} className='columns portfolio-item'>
          <div className='item-wrap'>
            <a href={project.url} title={project.title}>
              <img alt={project.title} src={projectImage} />
              <div className='overlay'>
                <div className='portfolio-item-meta'>
                  <h5>{project.title}</h5>
                  <p>{project.category}</p>
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
    <Route
      path={props.paths}
      render={() => (
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
      )}
    />
  );
};

export default Portfolio;
