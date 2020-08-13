import React, { Component } from 'react';
import './App.css';
import { Home } from './components/Home'
import { Department } from './components/Department'
import { Employee } from './components/Employee';
import { Navigation } from './components/Navigation';

import { BrowserRouter, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h3 className="m-3 d-flex justify-content-center">React JS with Web API Demo</h3>
          <h5 className="m-3 d-flex justify-content-center">Employee management portal</h5>

          <Navigation/>

          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/department' component={Department} />
            <Route path='/employee' component={Employee} />
          </Switch>
        </div>
      </BrowserRouter >
    );
  }
}

export default App;
