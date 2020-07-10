import React from 'react';
import './profile-card.styles.scss'
import { Image, Button, ButtonGroup } from 'react-bootstrap';
import picture from "../../assets/profilePicture.png";
import { ReactComponent as PhoneIcon } from "../../assets/phone.svg";
//components
import ProfileInfo from './profile-information.component';
import IconButton from '../icon-button/icon-button.component';


const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <Image rounded className="profile-image" src={picture} alt="Profile" />
            <ProfileInfo />
            <ButtonGroup className='buttons'>   
                <Button variant='secondary' size='md'>GitHub</Button>
                <Button variant='success' size='md'>{<IconButton name={'LinkedIn'}/> }</Button>
            </ButtonGroup>
        </div>
    )
}

export default ProfileCard;
