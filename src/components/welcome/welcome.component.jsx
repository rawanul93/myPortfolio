import React, { useContext } from "react";
import "./welcome.styles.scss";
import { useHistory } from "react-router-dom";

//components
import Skills from "../skills/skills.component";
//context
import { SelectedTabContext } from "../../contexts/selectedTabContext";
import { RefContext } from '../../contexts/refContext';

const Welcome = () => {

  const { refAbout } = useContext(RefContext);

  const scrollToRef = (ref) =>  {
      console.log(ref);
      ref.current.scrollIntoView()};

    const { changeTab } = useContext(SelectedTabContext);
    let history = useHistory();

    const handleClick = () => {
        changeTab(2);
        history.push("/resume");
    };

    return (
      <div className="welcome">
        <span className='intro'>Hey, I'm Rawanul.</span>
        <span className="welcome-main">
          I am a <span style={{ fontWeight:'bolder' , color: "whitesmoke" }}>fullstack developer</span> specialized in <span style={{color: '#00D8FF'}}>React</span> and <span style={{color: '#539E43'}}>Node Js</span>.</span>
        <div className="welcome-sub">
          <span className="sub-text">
            I develop fast and responsive web applications that will bring your ideas to life. My passion is focussing on delivering positive and engaging experiences using seamless and efficient user interfaces and designs.
          </span>
          <div className='more-option'>
            <div className='option' onClick={() => scrollToRef(refAbout)}>Learn More</div>
            <div className='arrow-icon'>&gt;</div>
          </div>
          
        
        </div>

        <Skills handleClick={handleClick}/>
      
      </div>
    );
}

export default Welcome;