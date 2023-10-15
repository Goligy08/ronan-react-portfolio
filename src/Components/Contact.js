import React from "react";
import "../Styles/Contact.scss";
import ContactForm from "./ContactForm";
import { faClose, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact =  () => {

    return (
        <div className="contact">

            <nav className="nav">
                <div className="logo"></div>
                <button className="close">Close <FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button>
            </nav>

            <div className="contact-main">
                <FontAwesomeIcon icon={faCommentDots} className="contact-speech-bubble"></FontAwesomeIcon>
                <h1 className="contact-title">Let's Talk!</h1>
                <p class="contact-message">If you would like to get in touch, Please send a message using the form below!</p>
                 
               <ContactForm />
              

            </div>
        </div>
    )
}


export default Contact;