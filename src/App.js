import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'

function App(){
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello noob joey
        </p>
      </header>
    </div>
  );

}


export default App;
