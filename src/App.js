import React from 'react';
import logo from './logo.svg';
import './App.css';

function Footer(){
  return (
    <footer>Im a footer </footer>
  );
}

function Body(){
  return (
    <body>Body will by heare</body>
  )
}

function App() {
  return (

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
        <body className="App-body">
          <p>
            <Body/>
          </p>
        </body>
      <footer className="App-footer">
            <Footer/>
      </footer>
    </div>

  );

}

export default App;
