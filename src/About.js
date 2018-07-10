import React , { Component } from 'react';
import './App.css';
import './index.css';
import logo from './logo.svg';



export default function About(props) {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to The About page</h1>
      </header>
        {props.children}
      </div>
    )
}
