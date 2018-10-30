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
 
  handleLogin = (token, username) =>{
    localStorage.setItem('token', token)
    localStorage.setItem('username', username)
  }

  render() {
    return (
      <AppBackground>
      <div>
      <Home />
      </div>
      <Route path="/registration" render={props => <Registration {...props} login = {this.handleLogin}/>} />
      <Route path="/login" render={props => <Login {...props} login = {this.handleLogin}/>} />
      </AppBackground>
    );
  }
}

export default App;
