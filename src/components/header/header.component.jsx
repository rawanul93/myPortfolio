import React, { useContext, useEffect } from "react";
import "./header.styles.css";

import { useLocation, useHistory } from "react-router-dom";

//context
import { SelectedTabContext } from "../../contexts/selectedTabContext";

const Header = () => {
  const { tab, changeTab } = useContext(SelectedTabContext);
 
  let location = useLocation();
  let history = useHistory();
  
  console.log(location);
  
  useEffect(() => {
    let path = location.pathname;
    switch (path) {
      case '/':
        changeTab(1);
        break;
      case '/portfolio':
        changeTab(2);
        break;
      case '/contact':
        changeTab(3);
        break;
      default:
        changeTab(1);
    }
  })

  const handleClick = (selection) => {

    if (selection === tab) return;

    switch (selection) {
      case 1:
        changeTab(selection);
        history.push("/");
        break;
      case 2:
        changeTab(selection);
        history.push("/portfolio");
        break;
      case 3:
        changeTab(selection);
        history.push("/contact");
        break;
      default:
        history.push("/");
    }
  };

  return (

    <div className='header-wrapper'>
      <div className="header">
      <span
        onClick={() => handleClick(1)}
        className={`${tab === 1 ? "selected" : ""} option`}
      >
        Home
      </span>
      <span
        onClick={() => handleClick(2)}
        className={`${tab === 2 ? "selected" : ""} option`}
      >
        Portfolio
      </span>
      <span
        onClick={() => handleClick(3)}
        className={`${tab === 3 ? "selected" : ""} option`}
      >
        Contact
      </span>
        <div id="indicator"></div>.
    
      </div>
    </div>
    
  );
};

export default Header;
