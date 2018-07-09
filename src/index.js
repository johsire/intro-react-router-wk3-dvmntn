import { Switch } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import About from './About';
import Store from './Store';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" component={Store} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
