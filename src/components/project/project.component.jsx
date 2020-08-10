import React from 'react';
import './project.styles.scss';
// import 'bootstrap-social';
import icon from '../../assets/github-icon.png'

//components
import IconButton from '../icon-button/icon-button.component';


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
                        
                    <div className='button-group'> 
                    
                        <IconButton link={linkToGithub} icon={icon} buttonClassName={'github-btn'} name={'GitHub'}/>
                        
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