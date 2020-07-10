import React from 'react';
import './header.styles.css';

class Header extends React.Component  {
    
    state = {
        selectedTab: 1 //home by default
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <div className='header'>
                <span className={`${selectedTab === 1? "selected" : ""} option`}>Home</span>
                <span className='option'>Portfolio</span>
                <span className='option'>Contact</span>
                <div id='indicator'></div>. 
            </div>
        )
    }
}

export default Header;
