//Core
import React from 'react';
//Style
import './App.css';
//Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';

function App() {
  return (
        <>
          <div className="App">
            <Header />
              <div className = "Content">
                <Main />
              </div>
            <Footer />
          </div>
        </>
  );
}

export default App;
