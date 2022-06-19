import React from 'react';

const Button = ({ classname, icon, func }) => {
    return (
        <button 
          className={classname}
          onClick={() => func(true)}
        >
          <img src={icon} alt="arrow" />
        </button>
    );
}

export default Button;
