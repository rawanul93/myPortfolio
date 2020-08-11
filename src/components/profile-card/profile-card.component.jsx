import React, { useContext } from 'react';
import './profile-card.styles.scss'
import picture from '../../assets/profile-image.jpg';

import { RefContext } from '../../contexts/refContext';

const ProfileCard = () => {

    const { refContact } = useContext(RefContext);
    const scrollToRef = (ref) =>  {
        ref.current.scrollIntoView()
    };



    return (
        <div className='profile-card'>
            <img className="profile-image" src={picture} alt="Profile" />
           <div className='link-to-contact' onClick={() => scrollToRef(refContact)}>Get in touch</div>
        </div>
    )
}

export default ProfileCard;
