import React from "react";
import "./homepage.styles.scss";
import {Jumbotron} from "react-bootstrap";

//components
import ProfileCard from "../../components/profile-card/profile-card.component";
import Welcome from '../../components/welcome/welcome.component';
import PortfolioPreview from "../../components/porfolio-preview/porfolio-preview.component";

const HomePage = () => {
  return (
    <div className='homePage'>
      <Jumbotron className="home-container">
        <Welcome />
        <ProfileCard />   
      </Jumbotron>
      <PortfolioPreview />

    
    </div>
  );
};

export default HomePage;
