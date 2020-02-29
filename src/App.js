//Core
import React from 'react';
import Axis from 'axis';

//Style
import './App.css';
//Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';

//Get data from server
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
