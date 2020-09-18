import React from 'react';
import Logo from '../assets/images/honk-logo.png'
import '../Logo.css';

const HonkLogo = () => {
    return (
        <div className="logo-box">
            <img id="honklogo" alt='logo' src={Logo} />
        </div>
    );
}

export default HonkLogo;




