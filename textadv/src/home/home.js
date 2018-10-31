import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components'

const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-image: linear-gradient(to right, lightblue , seagreen);
  margin: auto; 
  border-radius: 20px;
  padding: 10px; 
  margin: 10px;  
`
const NavItem = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding:3px;
    font-size: 20px; 
    
    &:hover {
        background-color: white;
        color: seagreen;
        border-radius: 5px; 
      }
`

class Home extends Component{
    constructor(){
        super();
    }
    render(){
        return(
        <AppHeader>
          <NavItem to="/registration">Registration</NavItem>
          <NavItem className="nav-item" to="/login">Login</NavItem>
          <NavItem className="nav-item" to="/">Logout</NavItem>
        </AppHeader>
        )
    }
}

export default Home; 