import React from 'react';
import './project.styles.scss';
// import 'bootstrap-social';
import icon from '../../assets/github-icon.png'
import { Button } from 'react-bootstrap';


const Project = ({ project: { title, features, images, linkToGithub, linkToDemo }}) => {
    return (
        <div className='project'>
            <h1>{title}</h1>
            
            <div className='content'>
                <div className='features'>
                    <h2>Features</h2>
                    <ul>
                        {
                            features.map((feature, id) => 
                                <li key={id}>{feature}</li>
                            )
                        }
                    </ul>
                        
                    {/* <btn class="btn btn-social btn-github">
                        <img className='button-icon' alt='icon' src={icon} /> Sign in with Twitter
                    </btn> */}

                    {/* <button>More Details</button> */}

                    <div className='button-group'>
                        <form action={linkToGithub} target="_blank">
                            <button type='submit' className='github-btn'>
                                <img className='button-icon' alt='icon' src={icon} />Github
                            </button>
                        </form>

                        <form action={linkToDemo} target="_blank">
                            <button type='submit' className='demo-btn'>
                               Live Demo!
                            </button>
                        </form>
                    </div>
                </div>
                <div className='project-images'>
                    <img alt='portfilio' src={images[0]}/>
                </div>
            </div>
                
           
        </div>
    )
}

export default Project;
