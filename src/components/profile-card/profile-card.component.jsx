import React, { useContext } from 'react';
import './profile-card.styles.scss'
import { Image } from 'react-bootstrap';
import picture from '../../assets/profile-image.jpg';
import githubIcon from '../../assets/github-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'

import { RefContext } from '../../contexts/refContext';

//components
// import ProfileInfo from './profile-information.component';

const ProfileCard = () => {

    const { refContact } = useContext(RefContext);
    const scrollToRef = (ref) =>  {
        ref.current.scrollIntoView()
    };



    return (
        <div className='profile-card'>
            <img className="profile-image" src={picture} alt="Profile" />
           
           <div className='link-to-contact' onClick={() => scrollToRef(refContact)}>Want to contact me?</div>
            
            {/* <div className='button-group'>
                <IconButton icon={githubIcon} link={'https://github.com/rawanul93'} buttonClassName={'github-btn'} name={'GitHub'}/>
                <IconButton icon={linkedinIcon} link={'https://www.linkedin.com/in/rawanul-momen-2ba55616b/'} buttonClassName={'linkedin-btn'} name={'LinkedIn'}/>
            </div> */}
        
        </div>
    )
}

export default ProfileCard;
