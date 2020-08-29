import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import BannersTest from './Components/BannersTest';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <BannersTest />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
