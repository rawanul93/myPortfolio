import React from "react";

//syling
import "./portfolio.styles.scss";
import { Jumbotron, Carousel } from "react-bootstrap";

//components
import Project from "../../components/project/project.component";

//data
import PROJECTS from "../../projectData";

const projects = PROJECTS;

const PortfolioPreview = () => {
  return (
    <div>
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
