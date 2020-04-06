import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import MainBody from './components/body/Body';

function App(){
  return (
    <div className="App">
      <Header/>
      <MainBody/>
    </div>
  );

}


export default App;
