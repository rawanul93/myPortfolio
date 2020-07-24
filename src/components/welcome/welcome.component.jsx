import React, { useContext } from "react";
import "./welcome.styles.scss";
import { useHistory } from "react-router-dom";

//components
import Skills from "../skills/skills.component";
import { Button } from "react-bootstrap";

//context
import { SelectedTabContext } from "../../contexts/selectedTabContext";

const Welcome = () => {
    const { changeTab } = useContext(SelectedTabContext);
    let history = useHistory();

    const handleClick = () => {
        changeTab(2);
        history.push("/portfolio");
    };

    return (
      <div className="welcome">
        <span className='intro'>Hey, I'm Rawanul.</span>
        <span className="welcome-main">
          I am a <span style={{ fontWeight: "bolder", color: "white" }}>fullstack developer</span> with experience building large web applications.</span>
        <div className="welcome-sub">
          <span className="sub-text">
            The web apps have flushed out features that are essential to modern
            apps of today. I have a bachelors degree in Industrial Engineering
            from the Universiity of Toronto.
          </span>
         <Button onClick={() => handleClick()} variant='outline-info' className='button-portfolio'>Check out portfolio</Button>
        </div>

        <Skills />
      
      </div>
    );
}

export default Welcome;