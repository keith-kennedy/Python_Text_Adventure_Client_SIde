import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import { Route } from 'react-router-dom';
import Registration from './registration/registration';
import Login from './login/login'
class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <Home />
      </div>
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
