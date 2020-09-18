
import React, { Component } from 'react';
import BRMain from './Components/BRMain';
import "./assets/scss/index.scss";
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import Note from './Components/ButtonComponent';
import Help from './Components/HelpComponent';
import Transfer from './Components/TransferComponent'
import HonkLogo from './Components/LogoComponent'
import './App.css';
import Start from "./Components/StartComponent"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Start />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;