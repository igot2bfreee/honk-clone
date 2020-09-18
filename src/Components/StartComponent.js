import React from 'react';
import HonkLogo from "./LogoComponent"
import Button from './BRButton'
import Timer from '../assets/images/timer.png'
import { Link } from 'react-router-dom';

function Start() {
    
    function FastService() {
        return (
            <div>
                <img id="timer" alt='timer' src={Timer} />
                <h1>FAST SERVICE</h1>
                <p>Award-winning industry technology</p>
                <p>GPS location finds the closest service provider</p>
            </div>
        );
    }
    
    return (
        <React.Fragment>
            <HonkLogo />
            <Button />
            <FastService />
        </React.Fragment>
    );

}

export default Start;