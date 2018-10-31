import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import { Route } from 'react-router-dom';
import Registration from './registration/registration';
import Login from './login/login'
import styled from 'styled-components';

const AppBackground = styled.div`
  text-align: center; 
  animation: colorchange 10s infinite;
  height: 650px; 
  @keyframes colorchange{
    0% {background-color: red;}
    25% {background-color: yellow;}
    50% {background-color: blue;}
    75% {background-color: green;}
    100% {background-color: red;}
  }
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
      <div>
      <Home />
      </div>
      <Route path="/registration" render={props => <Registration {...props} login = {this.handleLogin}/>} />
      <Route path="/login" render={props => <Login {...props} login = {this.handleLogin}/>} />
      </div>
      </AppBackground>
    );
  }
}

export default App;
