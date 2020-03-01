//Core
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
//Style
import './App.css';
//Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';

//Get data from server
function App() {

const [data, resivData] = useState([]);

useEffect( ()=> {
  Axios.get('http://localhost:3001/posts')
    .then(function (response) {
      // handle success
      resivData(response.data);
      //console.log(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

}, []);

  return (
    <div className="App">
      <Header />
      <Main value= {data} />
      <Footer />
    </div>
  );
}

export default App;
