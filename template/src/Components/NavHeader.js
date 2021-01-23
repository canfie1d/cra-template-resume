import { useContext } from 'react';
import { Context } from '../Contexts/AppStore';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [state] = useContext(Context);

  var name = state.main.name;
  var occupation = state.main.occupation;
  var description = state.main.description;
  var address = state.main.address;

  const renderNetworks = () => {
    if (state.main.social) {
      return state.main.social.map((network) => (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      ));
    }
  };

  return (
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>
        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Home
            </a>
          </li>
          <li>
            <NavLink className='smoothscroll' to='/about'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink className='smoothscroll' to='/resume'>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink className='smoothscroll' to='/portfolio'>
              Works
            </NavLink>
          </li>
          <li>
            <NavLink className='smoothscroll' to='/testimonials'>
              Testimonials
            </NavLink>
          </li>
          <li>
            <NavLink className='smoothscroll' to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>I'm {name}.</h1>
          <h3>
            I'm a {address.city} based <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className='social'>{renderNetworks()}</ul>
        </div>
      </div>
      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
