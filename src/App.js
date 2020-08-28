import React from 'react';
import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import HelpPage from './Components/HelpComponent'
import './App.css';
import Transfer from './Components/TransferComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Transfer />
      </div>
    </BrowserRouter>
  );
}

export default App;
