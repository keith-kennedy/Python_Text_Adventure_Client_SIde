import React, { Component } from 'react';
import './App.css';
import Home from './home/home'
import Game from './game/game'
import { Route } from 'react-router-dom';
import Registration from './registration/registration';
import Login from './login/login'
import styled from 'styled-components';
import LandingPage from './landingPage/landing'; 
import Background from "./background.js"; 

const AppBackground = styled.div`
  text-align: center; 
  height: 100vh; 
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
        <Background />
      <div>
      <div>
      <Home/> 
      </div>
      <Route exact path="/" render={props => <LandingPage {...props} />}  /> 
      <Route path="/registration" render={props => <Registration {...props} login = {this.handleLogin}/>} />
      <Route path="/login" render={props => <Login {...props} login = {this.handleLogin}/>} />
      <Route path="/game" render={props => <Game {...props}/>} />
      </div>
      </AppBackground>
    );
  }
}

export default App;
