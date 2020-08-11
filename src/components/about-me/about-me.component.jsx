import React, {useContext, useRef, createRef, useEffect} from 'react'
import './about-me.styles.scss';
import aboutMeImage from '../../assets/profilePicture.png';
import IconButton from '../icon-button/icon-button.component';
import githubIcon  from '../../assets/github-icon.png';
import linkedinIcon from '../../assets/linkedin-icon2.svg';
import facebookIcon from '../../assets/facebook-icon.svg';
import { RefContext } from '../../contexts/refContext';


const AboutMe = () => {
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
                Even before deciding to become a developer, I had the outmost passion and drive towards innovation and efficiency in almost everything around me. I was always a jack of all trades, master of some (not none), so hence I pursued a bachelor's degree in <span style={{fontWeight:'bold', color:'whitesmoke'}}>Industrial Engineering</span> from the <span style={{fontWeight:'bold', color:'whitesmoke'}}>University of Toronto </span>. Industrial engineering dabbles in a wide variety of fields including programming, physics, business etc so it clicked. 
                I majored in <span style={{fontWeight:'bold', color:'whitesmoke'}}>Information engineering</span> with a focus on <span className='highlight'>Ergomomic Design of Information systems</span> and <span className='highlight'>Human Centred Design</span>.
             </div>
            <div className='about-2'>
            I realized soon after graduating, wearing several hats and working as a pure industrial engineer, that my true passion lies with coding and developing applications and technologies that encourage innovation and helps organizations and people become more efficient. 
            In order to go full throttle, I had to dive deeper into the world of coding and found my love for it in React Js. 
            Immediately afterwards, I found myself coding regularly, trying to build cool apps and learning and growing my skillset.
                {/* I realized soon after graduating, wearing several hats and working as a pure industrial engineer, that my true passion lies with coding and developing applications and technologies that encourage innovation and helps both organizations and people become more efficient.
                I code with the intention of providing fast and responsive applications that provide users with the best experience and satisfies clients at the same time. */}
            </div>

        <div className='mini-contact'></div>

        </div>
    )
}

export default AboutMe;
