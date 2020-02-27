import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function Footer(){
  return (
    <footer>Im a footer </footer>
  );
}


function Greeting(props){

  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const width = useWindowWidth();


  function handleNameChenge(e){
    setName(e.target.value);
  }
  function handleSurnameChenge(e){
    setSurname(e.target.value);

  }
  useEffect(()=>{
    document.title = name + " " + surname;
  });

  return (
    <section>
      <label>
       Name:
        <input
          type ="text"
          value= {name}
          onChange = {handleNameChenge}
         />
      </label>
      <label>
       Surname:
        <input
          type ="text"
          value= {surname}
          onChange = {handleSurnameChenge}
         />
      </label>
      <label>
       Width:
        {width}
      </label>
    </section>
  );

}

function App(props) {
  return (
    <>
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


    </div>

      <div className="App-body">
            <Greeting/>
      </div>

    <footer className="App-footer">
          <Footer/>
    </footer>
</>
  );

}

function useWindowWidth(){
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(()=>{
    const handlResize =() => setWidth(window.innerWidth);
    window.addEventListener('resize', handlResize);
    return ()=>{
      window.removeEventListener('resize', handlResize);
    };
  });
return width;
}

export default App;
