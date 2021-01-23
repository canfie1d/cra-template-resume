import { useContext } from 'react';
import { Route } from 'react-router-dom';
import { Context } from '../Contexts/AppStore';

const About = (props) => {
  const images = require.context('../Assets/images/', true);
  const [state] = useContext(Context);

  const name = state.main.name ?? '';
  const profilePic = images(`./${state.main.image}`).default;
  const bio = state.main.bio ?? '';
  const address = state.main.address ?? {};
  const phone = state.main.phone ?? '';
  const email = state.main.email ?? '';
  const resumeDownload = state.main.resumedownload ?? '';

  return (
    <Route
      path={props.paths}
      render={() => (
        <section id='about'>
          <div className='row'>
            <div className='three columns'>
              <img className='profile-pic' src={profilePic} alt='Profile Pic' />
            </div>
            <div className='nine columns main-col'>
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className='row'>
                <div className='columns contact-details'>
                  <h2>Contact Details</h2>
                  <p className='address'>
                    <span>{name}</span>
                    <br />
                    <span>
                      {address.street}
                      <br />
                      {address.city} {address.state}, {address.zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className='columns download'>
                  <p>
                    <a href={resumeDownload} className='button'>
                      <i className='fa fa-download'></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default About;
