import React, { useEffect, useRef, createRef, useContext } from "react";
import "./homepage.styles.scss";
import {Jumbotron} from "react-bootstrap";

//components
import ProfileCard from "../../components/profile-card/profile-card.component";
import Welcome from '../../components/welcome/welcome.component';
import PortfolioPreview from "../../components/porfolio-preview/porfolio-preview.component";
import AboutMe from "../../components/about-me/about-me.component";
import { RefContext } from "../../contexts/refContext";
import Contact from "../../components/contact/contact.component";

const HomePage = ({ setShow }) => {
  const { setRefHome } = useContext(RefContext);
  let ref = createRef();
  const myRef = useRef(ref);

  useEffect(() => {

  setRefHome(myRef);
})

  return (
    <div ref={myRef} className='homePage'>
      <Jumbotron className="home-container">
        <Welcome />
        <ProfileCard/>   
      </Jumbotron>
      <div className='seperator'></div>
      <PortfolioPreview />
      <AboutMe />
      <Contact />

    
    </div>
  );
};

export default HomePage;
