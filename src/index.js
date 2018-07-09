import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root')
);