import React from "react";
import "../Styles/SecondaryProjects.scss";
import MiniProject from "./MiniProject";


const SecondaryProjects = () => {
    return (
        <div className="secondary-projects">
        
        <MiniProject />
        <MiniProject />
        <MiniProject />
    
        <svg xmlns="http://www.w3.org/2000/svg" className="project-wave" viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1"
            d="M0,128L21.8,133.3C43.6,139,87,149,131,176C174.5,203,218,245,262,229.3C305.5,213,349,139,393,138.7C436.4,139,480,213,524,208C567.3,203,611,117,655,122.7C698.2,128,742,224,785,240C829.1,256,873,192,916,181.3C960,171,1004,213,1047,208C1090.9,203,1135,149,1178,144C1221.8,139,1265,181,1309,181.3C1352.7,181,1396,139,1418,117.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z">
        </path>
    </svg>
        </div>
    )
}

export default SecondaryProjects;