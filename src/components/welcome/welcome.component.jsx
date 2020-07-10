import React from 'react';
import './welcome.styles.scss';

//components
import Skills from '../skills/skills.component';
import { Button, ButtonGroup } from 'react-bootstrap';


const Welcome = () => {
    return (
        <div className='welcome'>
            <span className='welcome-main'>I am a <span style={{fontWeight: 'bolder' ,color:'white'}}>fullstack developer</span> with experience building large web applications.
            </span>
            <div className='welcome-sub'>
                <span className='sub-text'>The web apps have flushed out features that are essential to modern apps of today. I have a bachelors degree in Industrial Engineering from the Universiity of Toronto and that helps me create apps with efficient design and coding techniques</span>
                <Button variant='outline-light' className='button-portfolio'>Check out Portfolio</Button>
            </div>

            <Skills/>
            
        </div>
    )
}

export default Welcome;
