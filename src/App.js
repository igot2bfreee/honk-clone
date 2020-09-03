import React, { Component } from 'react';
import "./assets/scss/index.scss";
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import './App.css';

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
