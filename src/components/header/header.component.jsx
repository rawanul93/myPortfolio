import React, { useContext, useEffect } from "react";
import "./header.styles.css";

import { useScrollPosition } from '@n8tb1t/use-scroll-position'

//context
import { SelectedTabContext } from "../../contexts/selectedTabContext";
import { RefContext } from "../../contexts/refContext";

const Header = () => {
  const { tab, changeTab } = useContext(SelectedTabContext);
  const { refPortfolio, refHome, refAbout, refContact } = useContext(RefContext);

  
  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos);
    if(prevPos !== currPos) {

      if(currPos.y >-863) {
        changeTab(1);
      }
      if(currPos.y <= -863 && currPos.y > -1809) {
        changeTab(2);
      }

      if(currPos.y <= -1809 && currPos.y > -2316) {
        changeTab(3);
      }

      if(currPos.y <= -2316) {
        changeTab(4);
      }

    }
  })
  
  useEffect(() => {
   
    switch (tab) {
      case 1:
        changeTab(1);
        break;
      case 2:
        changeTab(2);
        break;
      case 3:
        changeTab(3);
        break;
      case 4:
        changeTab(4);
        break;  
      default:   
        changeTab(1);
    }
  })

  
  
  const scrollToRef = (ref) =>  {
      ref.current.scrollIntoView()
  };

  const handleClick = (selection) => {

   // if (selection === tab) return;

    switch (selection) {
      case 1:
        changeTab(selection);
        scrollToRef(refHome);
        break;
      case 2:
        changeTab(selection);
        scrollToRef(refPortfolio);
        break;
      case 3:
        changeTab(selection);
        scrollToRef(refAbout);
        break;
      case 4:
        changeTab(selection);
        scrollToRef(refContact);
        
        break;
      default:
    }
  };

  return (

    <div className='header-wrapper'>
      <div className="header">
      <span
        onClick={() => handleClick(1)}
        className={`${tab === 1 ? "selected1" : ""} option`}
      >
        Home
      </span>
      <span
        onClick={() => handleClick(2)}
        className={`${tab === 2 ? "selected2" : ""} option`}
      >
        Portfolio
      </span>
      <span
        onClick={() => handleClick(3)}
        className={`${tab === 3 ? "selected3" : ""} option`}
      >
        About
      </span>

      <span
        onClick={() => handleClick(4)}
        className={`${tab === 4 ? "selected4" : ""} option`}
      >
        Contact
      </span>
        <div id="indicator"></div>.
    
      </div>
    </div>
    
  );
};

export default Header;
