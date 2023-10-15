import React, { useState } from "react";
import "../Styles/MobileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';



const MobileNav = () => {

    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if (showMenu) {
        menu = <div className="mobile-menu">
            <ul className="mobile-links">
                <li>Projects</li>
                <li>Contact</li>
                <li className="dark"><FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon></li>
            </ul>
        </div>

        menuMask = <div className="mobile-menu-bg">

        </div>
    }

    return (
        
       <div className="mobile-nav">
        <div className="logo"></div>
        <button className="mobile-hamburger">
            <FontAwesomeIcon icon={faBars} className="mobile-icon"
              onClick={() => setShowMenu(!showMenu) }
            >
            </FontAwesomeIcon></button>
       
          {menu}
       </div>
    )
}


export default MobileNav;