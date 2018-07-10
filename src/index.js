import { Switch } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Store from './Store';
import Hammers from './Hammers'
import Drills from './Drills';
import Nails from './Nails';
import StoreLanding from './StoreLanding';
import './index.css';



ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" render={()=> (
        <Store>
          Whatever I put here will be rendered in out Store page as a prop.
        </Store>
      )} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
