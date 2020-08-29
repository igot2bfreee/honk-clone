import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import Banner from './Components/BannersComponent';
import Questions from './Components/QuestionsComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Banner />
          <Questions />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
