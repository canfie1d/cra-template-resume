import React, { useState } from 'react';
import { useSelector } from 'react-redux'

const Contact = () => {
  const data = useSelector(state => state.resumeData.data);

  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const [inputValues, setInputValues] = useState(initialState);

  var address = (data.main && data.main.address) || {street: '', city: '', state: '', zip: ''};

  const handleChange = e => {
    const input = e.target.id;
    const value = e.target.value;

    const newInputVals = {...inputValues, ...{[input]: value}}

    setInputValues(newInputVals)
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1><span>Get In Touch.</span></h1>
        </div>
        <div className="ten columns">
          <p className="lead">{data.contactmessage}</p>
        </div>
      </div>
      <div className="row">
        <div className="eight columns">
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input type="text" size="35" id="name" name="contactName" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="text" size="35" id="email" name="contactEmail" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" size="35" id="subject" name="contactSubject" onChange={e => handleChange(e)} />
              </div>
              <div>
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="message" name="contactMessage" onChange={e => handleChange(e)}></textarea>
              </div>
              <div>
                <button type='submit' className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>
          <div id="message-warning">Error</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!<br />
          </div>
        </div>
        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="address">
            {data.name}<br />
            {address.street} <br />
            {address.city}, {address.state} {address.zip}<br />
            <span>{data.phone}</span>
          </p>
        </div>
        {/* <div className="widget widget_tweets">
          <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">2 Days Ago</a></b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">3 Days Ago</a></b>
              </li>
            </ul>
          </div> */}
        </aside>
      </div>
    </section>
  );
}

export default Contact;
