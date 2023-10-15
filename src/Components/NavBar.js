
import React from "react";
import "../Styles/Navbar.scss";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {

    return (
        <div className="navbar">
         <div className="logo"></div>
         <ul className="desk-menu">
            <li>Projects</li>
            <li>Contact</li>
            <li className="dark"><FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon></li>
         </ul>
        </div>
    )
};


export default NavBar;