import React from "react";
import '../Styles/Project.scss';




const Project = (props) => {

    return (
        <div className="project">
            <img className="project-img" src={props.image} alt={props.title}></img>
                
            
                <button className="project-button">Learn More</button>
            


        </div>

    )
}

export default Project;