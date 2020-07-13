import React, { useState } from 'react';

//syling
import './portfolio.styles.scss';

//components
import ProfileCard from '../../components/profile-card/profile-card.component';
import Welcome from '../../components/welcome/welcome.component';
import { Jumbotron, Carousel } from 'react-bootstrap';


const Portfolio = () => {

    return (
        <div>
          <Carousel style={{marginTop: '50px'}} >
              <Carousel.Item >
                 <Jumbotron  className='project'>
                    <ProfileCard/>
                    <Welcome />
                 </Jumbotron>
               
                <Carousel.Caption><h1>YOOOOOO</h1></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                 <Jumbotron className='project'>
                    <ProfileCard/>
                    <Welcome />
                 </Jumbotron>
              </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default Portfolio;
