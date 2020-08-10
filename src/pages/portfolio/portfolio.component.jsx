import React from "react";

//syling
import "./portfolio.styles.scss";
import { Jumbotron } from "react-bootstrap";

//components
import Project from "../../components/project/project.component";

//data
import PROJECTS from "../../projectData";

const projects = PROJECTS;

const PortfolioPreview = () => {
  return (
    <div className='portfolio'>
        {projects &&
          projects.map((project) => (
              <Jumbotron className="project-container">
                <Project project={project}/>
              </Jumbotron>          
          ))}

    </div>
  );
};

export default PortfolioPreview;
