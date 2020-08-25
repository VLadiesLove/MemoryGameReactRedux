import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from './components/Arena'
import state from './state'
import {isOpen} from './state'

function App(props) {
 

  return (
    <div className="app-wrapper">
    <Arena isOpen={isOpen} state ={state}/>
    </div>
  );
}

export default App;
