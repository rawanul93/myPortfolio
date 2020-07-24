import React from "react";

//syling
import "./portfolio-preview.styles.scss";
import { Jumbotron, Carousel } from "react-bootstrap";

//components
import Project from '../project/project.component';

//data
import PROJECTS from '../../projectData';

const projects = PROJECTS;

const PortfolioPreview = () => {
  return (
    <div>
    <h1 className='section-title'>Projects</h1>
      <Carousel>
        {projects &&
          projects.map((project) => (
            <Carousel.Item id={project.id}>
              <Jumbotron className="project-container">
                <Project project={project}/>
              </Jumbotron>
              <Carousel.Caption>{project.title}</Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </div>
  );
};

export default PortfolioPreview;