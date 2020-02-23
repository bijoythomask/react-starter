import React from 'react';

import './Logo.css';
import burgerLogo from '../../../assets/burger-logo.png';

const logo = (props) => {
    return ( 
    <div className="Logo">
        <img  src={burgerLogo} alt="My Burger"/>
    </div> );
}
 
export default logo;