import React from "react";
import "../Styles/Projects.scss";
import Project from "./Project";
import ProjectRecords from "../ProjectRecords.json";

const Projects = () => {

  console.log(ProjectRecords);

    return(
        <div className="projects">
          
          {
            ProjectRecords.map( record => {
              console.log(record.image)
                return (
                
                <Project
                image = {record.image}
                title = {record.title}
                description = {record.description}
                webTechnologies = {record.webTechnologies}
                repoLink = {record.repoLink}
                />
                
                
        
                )
            })
          }
        </div>
    )
}

export default Projects;