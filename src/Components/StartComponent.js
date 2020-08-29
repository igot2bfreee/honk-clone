import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function Start(props) {
    return (
        <div className="App">
            <header className="App-header">
                <h4>Start</h4>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <Link to="/help">Help</Link>
            </header>
        </div>
    );

}

export default Start;