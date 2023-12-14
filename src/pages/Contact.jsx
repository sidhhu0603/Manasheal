import React from 'react';
import './Contact.css';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Hero from '../Components/Hero/Hero';
import Footer from '../Components/Footer/Footer';

const Contact = () => {

  return (
      <>




          <section id="contact" className="contact" style={{ position: 'absolute', left: '20%', width: '70%'}}>
            <div className="container" data-aos="fade-up" data-aos-delay="100" >
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <FaLocationDot style={{ color: '#333d55', fontSize: '3em' }} />
                    <h3>Our Address</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item d-flex flex-column justify-content-center align-items-center">
                    <MdEmail style={{ color: '#333d55', fontSize: '3em' }} />
                    <h3>Email Us</h3>
                    <p>contact@example.com</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6">
                  <div className="info-item  d-flex flex-column justify-content-center align-items-center">
                    <IoCall style={{ color: '#333d55', fontSize: '3em' }} />
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
              </div>

              <div className="row gy-4 mt-1">
                <div className="col-lg-6 ">
                  <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    frameBorder="0"
                    style={{ border: 0, width: '100%', height: '384px' }}
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="col-lg-6">
                  <form
                    action={`${process.env.PUBLIC_URL}/src/forms/contact.php`}
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row gy-4">
                      <div className="col-lg-6 form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="col-lg-6 form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button style={{backgroundColor:'#333d55'}} type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section><br/><br/>


    </>
  );
};

export default Contact;
