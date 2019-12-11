import React from 'react';
import { useSelector } from 'react-redux'

const About = () => {
  const data = useSelector(state => state.resumeData.data);

  var name = (data.main && data.main.name) || '';
  var profilepic= (data.main && `./Assets/images/${data.main.image}`) || '';
  var bio = (data.main && data.main.bio) || '';
  var address = (data.main && data.main.address) || {};
  var phone= (data.main && data.main.phone) || '';
  var email = (data.main && data.main.email) || '';
  var resumeDownload = (data.main && data.main.resumedownload) || '';

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic"  src={profilepic} alt="Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span><br />
                <span>{address.street}<br />
                  {address.city} {address.state}, {address.zip}
                </span><br />
                <span>{phone}</span><br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
