
import React from 'react';
import BRMain from './components/BRMain';
import React, { Component } from 'react';
import "./assets/scss/index.scss";
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import Note from './Components/ButtonComponent';
import Help from './Components/HelpComponent';
import Transfer from './Components/TransferComponent'
import './App.css';
import Start from "./Components/StartComponent"
import Note from './Components/ButtonComponent';
import Help from './Components/HelpComponent';
import Transfer from './Components/TransferComponent'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;