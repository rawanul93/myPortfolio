import React from "react";
import "./skills.styles.scss";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as SassIcon } from "../../assets/sass.svg";
import { ReactComponent as SemanticIcon } from "../../assets/semantic.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/bootstrap.svg";
import { ReactComponent as RouterIcon } from "../../assets/router.svg";
import { ReactComponent as FirebaseIcon } from "../../assets/firebaseIcon.svg";
import { ReactComponent as NodeIcon } from "../../assets/nodeIcon.svg";
import { ReactComponent as ExpressIcon } from "../../assets/express.svg";
import { ReactComponent as SqlIcon } from "../../assets/postgresql.svg";
import { ReactComponent as CssIcon } from "../../assets/cssIcon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/html5Icon.svg";
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skill-group">
        <h5>Front End</h5>
        <div className="skills">
          <div className="icon-name">
            <ReactIcon />
            <span>React</span>
          </div>
          <div className="icon-name">
            <SassIcon />
            <span>Sass</span>
          </div>
          <div className="icon-name">
            <SemanticIcon />
            <span>Semantic</span>
          </div>
          <div className="icon-name">
            <BootstrapIcon />
            <span>Bootstrap</span>
          </div>
          <div className="icon-name">
            <CssIcon />
            <span>CSS5</span>
          </div>
          <div className="icon-name">
            <HtmlIcon />
            <span>HTML5</span>
          </div>
        </div>
      </div>
      <div className='seperator'></div>
      <div className="skill-group">
        <h5>Back End</h5>
        <div className="skills">
          <div className="icon-name">
            <FirebaseIcon />
            <span>Firebase</span>
          </div>
          <div className="icon-name">
            <ReduxIcon />
            <span>Redux</span>
          </div>
          <div className="icon-name">
            <RouterIcon />
            <span>React Router</span>
          </div>
          <div className="icon-name">
            <NodeIcon />
            <span>Node</span>
          </div>
          <div className="icon-name">
            <ExpressIcon />
            <span>Express</span>
          </div>
          <div className="icon-name">
            <SqlIcon />
            <span>PostgreSQL</span>
          </div>
        </div>
      </div>
      <div className="skill-group" style={{ width: "200px" }}>
        <h5 style={{textDecoration:'underline'}}>Full Resume</h5>
      </div>
    </div>
  );
};

export default Skills;
