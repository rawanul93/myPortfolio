import React, { useContext, createRef, useRef, useEffect } from 'react';
import './contact.styles.scss';
import callIcon from '../../assets/callIcon.svg'
import emailIcon from '../../assets/email-icon.svg'
import locationIcon from '../../assets/location-icon.svg'
import { RefContext } from '../../contexts/refContext';

const Contact = () => {
    const { setRefContact} = useContext(RefContext);
    let ref = createRef();
    const myRef = useRef(ref);

    useEffect(() => {
        setRefContact(myRef);
    })

    return (
        <div ref={myRef} className='contact-container'>
            <h1 className='title'>Contact</h1>
            <div className='list'>
                <div className='list-item'>
                    <img alt='call' src={callIcon}/>
                    <span className='info'>+1-(647)-927-6871 </span>
                </div>
                <div className='list-item'>
                    <img alt='call' src={emailIcon}/>
                    <span className='info'>rawanul.momen.utornto.ca</span>
                </div>
                <div className='list-item'>
                    <img alt='call' src={locationIcon}/>
                    <span className='info'>North York, ON</span>
                </div>
            </div>
            <div className='ending-note'>This website was entirely made from scratch using latest React concepts like the context API and others. Git repository: <a className='ending-link' href='https://github.com/rawanul93/myPortfolio' target='blank'>https://github.com/rawanul93/myPortfolio</a></div>

        </div>
    )
}

export default Contact;
