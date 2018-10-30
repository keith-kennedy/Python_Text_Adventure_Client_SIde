import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Game from '../game/game';
import styled from 'styled-components';
import axios from 'axios';

const RegBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px; 
`
const  InputBox = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto; 
`
const Input =styled.input`
    width: 200px;
    height: 30px; 
    margin: 5px; 
`
const Btn = styled(NavLink)`
    text-decoration: none; 
    color: white;
    background-image: linear-gradient(to right, lightblue , seagreen);
    padding: 20px; 
    border-radius: 20px; 
    margin: 5px; 
`


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        } 
    }
    changeHandler = (event) => {
        this.setState =({[event.target.name]: event.target.value})
    }
    handleLogin = (event) => {
        event.preventDefault()
        axios.post('https://textadv.herokuapp.com/api/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            this.props.login(response.data.key, this.state.username)
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })
    }

    render(){
        return(
            <div className='reg-page'>
            <RegBox>
                <h1>Login</h1>
                    <InputBox>
                        <Input type="text" name="username" placeholder="Username"  value={this.state.username} onChange={this.changeHandler} />
                        <Input type="text" name="password" placeholder="Password"  value={this.state.password} onChange={this.changeHandler}/>
                        <Btn onClick={this.handleLogin} to='/game'>Play</Btn>
                        <Route path="/game" component={Game} />
                    </InputBox>
            </RegBox>
            </div> 
        )
    }
}

export default Login; 


