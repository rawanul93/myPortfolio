import React, {useContext, useRef, createRef, useEffect} from 'react'
import './footer.styles.scss';
import aboutMeImage from '../../assets/profilePicture.png';
import IconButton from '../icon-button/icon-button.component';
import githubIcon  from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon2.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import { RefContext } from '../../contexts/refContext';


const Footer = () => {
    const { setRefAbout } = useContext(RefContext);
        let ref = createRef();
        const myRef = useRef(ref);
   
    useEffect(() => {
    
        setRefAbout(myRef);
    })
    
    
    return (
        <div ref={myRef} className='footer'>
            <h1 className='title'>About me</h1>
            <img className='footer-image' alt='about me' src={aboutMeImage}/>
            <div className='name'>Rawanul Momen (Rusaf)</div>
            <div className='about-main'> React Developer <span style={{color:'rgba(250, 111, 30, 1)', margin:'0px 5px'}}>|</span>  Engineer <span style={{color:'rgba(250, 111, 30, 1)', margin:'0px 5px'}}>|</span> Musician</div>
            
            <div className='icon-button-group'>
                <IconButton icon={githubIcon} link={'https://github.com/rawanul93'} buttonClassName={'icon-circle-btn'} circle='true'/>            
                <IconButton icon={linkedinIcon} link={'https://www.linkedin.com/in/rawanul-momen-2ba55616b/'} buttonClassName={'icon-circle-btn'} circle='true'/>
                <IconButton icon={facebookIcon} link={'https://www.facebook.com/rusaf.momen'} buttonClassName={'icon-circle-btn'} circle='true'/>
            </div>
            
            
            <div className='about-1'>Hey there! I am Rawanul and I am a Fullstack developer specialized in React Js and Node Js.</div>
            <div className='about-2'>
                Before becoming a developer, I pursued a bachelor's degree in <span style={{fontWeight:'bold', color:'whitesmoke'}}>Industrial Engineering</span> from the <span style={{fontWeight:'bold', color:'whitesmoke'}}>University of Toronto </span>where I majored in <span style={{fontWeight:'bold', color:'whitesmoke'}}>Information engineering</span> with a focus on <span className='highlight'>Ergomomic Design of Information systems</span> and <span className='highlight'>Human Centred Design</span>.
                It helped shape my ability to work with various teams and develop designs that focuses on understanding the views and requirements of the users.
             </div>
            <div className='about-2'>
                I realized soon after graduating, wearing several hats and working as a pure industrial engineer, that my true passion lies with coding and developing applications and technologies that encourage innovation and helps both organizations and people become more efficient overall.
                I code with the intention of providing fast and responsive applications that has the best user interface so that it leaves users with a very positve experience.
            </div>

        <div className='mini-contact'></div>

        </div>
    )
}

export default Footer;
