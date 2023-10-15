import React from "react";
import "../Styles/ContactForm.scss";
import { faCheckCircle, faExclamationCircle, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactForm = () => {
    return (
        <div className="contact-form-container">

              <form className="contact-form">
                <div className="contact-form-element">
                    <input type="text" className="contact-name" name="contact-name" placeholder="Enter your name!"/>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </div>

                <div className="contact-form-element">
                    <input type="text" className="contact-email" name="contact-email" placeholder="Enter your email!"/>
                    <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </div>

                <div className="contact-form-element">
                <textarea className="contact-msg" name="contact-msg" placeholder="Your Message.."/>
                 <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
                 <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                </div>

                <button className="contact-submit">Submit <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                 
              </form>

        </div>
      
    )
    
}

export default ContactForm;