import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Start(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Reactify Honk</h2>
                <h4>Start</h4>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Leaving this here cuz it looks cool and we need somewhere to start.</p>
                <Link to="/help">Help</Link>
            </header>
        </div>
    );

}

export default Start;