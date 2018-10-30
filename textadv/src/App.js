import React, { Component } from 'react';
import './App.css';
import Registration from './registration/registration';
import Login from './login/login'
import { NavLink, Route } from 'react-router-dom';

import axios from 'axios'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavLink className="nav-item" to="/registration">Registration</NavLink>
          <NavLink className="nav-item" to="/login">Login</NavLink>
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
        </header>
      </div>
    );
  }
}

export default App;
