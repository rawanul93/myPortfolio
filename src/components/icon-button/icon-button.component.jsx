import React from "react";
import './icon-button.styles.scss'

const IconButton = ({ link, icon, buttonClassName, name, circle }) => {
  return (
    (circle ? 
        (<div>
            <form action={link} target="_blank">
                <button type="submit" className={buttonClassName}>
                <img className="button-icon" alt="icon" src={icon} />
                </button>
            </form>
        </div>)

        : 

        (<div>
            <form action={link} target="_blank">
                <button type="submit" className={buttonClassName}>
                <img className="button-icon" alt="icon" src={icon} />
                <span >{name}</span>
                </button>
            </form>
        </div>)
    
    
    )
    
  );
};

export default IconButton;
