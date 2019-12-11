import React from 'react';
import { useSelector } from 'react-redux'

const Footer = () => {
  const data = useSelector(state => state.resumeData.data);
  const date = new Date();

  const renderNetworks = () => {
    if (data.social) {
      return data.social.map(function(network) {
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {renderNetworks()}
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright {date.getFullYear()} {data.main && data.main.name}</li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;
