import React from 'react'
import { ReactComponent as PhoneIcon } from  '../../assets/phone.svg';


const IconButton = ({iconPath, name}) => {
    return (
        <div>
         <PhoneIcon />
        <span style={{fontSize:'10px'}}>{name}</span>
        </div>
    )
}

export default IconButton;
