//Core
import React, { useState, useEffect } from 'react';
//Api
import Api from './engine/services/api/index.js'
//import Axios from 'axios';
//Style
import './App.css';
//Components
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Main from './components/main/Main.js';

//Get data from server
function App() {

const [data, resivData] = useState([]);

//Get data from server
useEffect(()=> {
  Api.getRequest()
    .then((response) => {
      // handle success
      resivData(response.data);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })
}, []);
//console.log(data);
  return (
    <div className="App">
      <Header />
      <Main data= {data} getData={resivData} />
      <Footer />
    </div>
  );
}

export default App;
