import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import Game from './game/game'
import { Route } from 'react-router-dom';
import Registration from './registration/registration';
import Login from './login/login'
import styled from 'styled-components';

const AppBackground = styled.div`
  text-align: center; 
  animation: colorchange 20s infinite;
  height: 650px; 
  @keyframes colorchange{
    0% {background-color: red;}
    10% {background-color: orange;}
    20% {background-color: yellow;}
    30% {background-color: green;}
    40% {background-color: blue;}
    50% {background-color: purple;}
    60% {background-color: pink;}
    70% {background-color: lightcoral;}
    80% {background-color: lightyellow;}
    90% {background-color: white;}
    100% {background-color: red;}
  }
`
class App extends Component {
 //handleLogin is used to retrieve the token and username from the api.
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
      <Route path="/game" render={props => <Game {...props}/>} />
      </div>
      </AppBackground>
    );
  }
}

export default App;
