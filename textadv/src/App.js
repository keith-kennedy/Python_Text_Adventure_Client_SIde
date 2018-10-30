import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import { Route } from 'react-router-dom';
import Registration from './registration/registration';
import Login from './login/login'
import styled from 'styled-components';

const AppBackground = styled.div`

  text-align: center;
`
class App extends Component {
  render() {
    return (
      <AppBackground>
      <div>
      <Home />
      </div>
      <Route path="/registration" component={Registration} />
      <Route path="/login" component={Login} />
      </AppBackground>
    );
  }
}

export default App;
