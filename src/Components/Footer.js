import React from "react";
import "../Styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
    return (
       <div className="footer">

         <button className="footer-contact">Get In Touch</button>
         <div className="copy">
         <h3 className="copy-name"><i className="copyright-icon"><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></i><span className="name">Ronan Goligy</span><span className="year">2022</span></h3>
         <h3 className="copy-location"><i className="location-icon"><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></i><span className="location">Belfast</span></h3>
         </div>
         


         <div className="socials">
            <i> <FontAwesomeIcon  icon={faGithub} className="social"></FontAwesomeIcon></i>
            <i><FontAwesomeIcon icon={faCodepen} className="social"></FontAwesomeIcon></i>
            <i><FontAwesomeIcon icon={faLinkedin} className="social"></FontAwesomeIcon></i>
            <i> <FontAwesomeIcon icon={faDribbble} className="social"></FontAwesomeIcon></i>
         </div>
       </div>
    )
}

export default Footer;


