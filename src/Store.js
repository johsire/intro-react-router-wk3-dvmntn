import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';


export default function Store(props) {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2 className="App-title">Welcome to The Store page</h2>
    </header>
      {props.children}
    </div>
  )
}
