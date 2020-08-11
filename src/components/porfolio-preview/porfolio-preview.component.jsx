import React, { useContext, createRef, useRef, useEffect } from "react";

//syling
import "./portfolio-preview.styles.scss";
import { Jumbotron, Carousel } from "react-bootstrap";

//components
import Project from '../project/project.component';

//data
import PROJECTS from '../../projectData';
//context
import { RefContext } from "../../contexts/refContext";

const projects = PROJECTS;

const PortfolioPreview = () => {

  const { setRefPortfolio } = useContext(RefContext);
        let ref = createRef();
        const myRef = useRef(ref);
   
    useEffect(() => {
    
        setRefPortfolio(myRef);
    })

  return (
    <div ref={myRef} className='portfolio-preview'>
      <h1 className='section-title'>Projects</h1>
        <Carousel>
          {projects &&
            projects.map((project, idx) => (
              <Carousel.Item key={project.id}>
                <Jumbotron  className="project-container">
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