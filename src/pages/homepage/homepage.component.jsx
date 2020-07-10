import React from "react";
import "./homepage.styles.scss";
import {
  Jumbotron,
  Button,
  Card,
  Image,
  Container,
  Row,
  Col
} from "react-bootstrap";
//components
import ProfileCard from "../../components/profile-card/profile-card.component";
import Welcome from '../../components/welcome/welcome.component';

const HomePage = () => {
  return (
    <div>
      <Jumbotron className="home-container">
        <ProfileCard />   
        <Welcome />
      </Jumbotron>
    
    </div>
  );
};

export default HomePage;
