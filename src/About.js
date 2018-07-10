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
        <h2>My name is Ras Joh!</h2>
        <p>
          Visit our store and shop around for a chance to get the best products for the best price! <br></br>
          We have a lot of discounts and promitions going on, so do not miss out on greate savings! <br></br>
          Remember to tell your kids, wives and sisiters!!
        </p>
      </div>
    )
}
