import React from 'react';
import logo from './logo.svg';
import './App.css';
import Arena from './components/Arena/Arena'
import {isOpen} from './state'

function App(props) {
 

  return (
    <div className="app-wrapper">
    <Arena state ={props.store.getState().arena}/>
    </div>
  );
}

export default App;
