import { useContext } from 'react';
import { Context } from '../Contexts/AppStore';

const Footer = () => {
  const [state] = useContext(Context);
  const date = new Date();

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
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>{renderNetworks()}</ul>
          <ul className='copyright'>
            <li>
              &copy; Copyright {date.getFullYear()} {state.main.name}
            </li>
            <li>
              Design by{' '}
              <a title='Styleshout' href='http://www.styleshout.com/'>
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
