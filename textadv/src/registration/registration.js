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
class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password1: '',
            password2: ''
        } 
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    registerHandler = (event) => {
        event.preventDefault()
        if(this.state.password1 === this.state.password2){
            axios.post('https://textadv.herokuapp.com/api/registration', {
                username: this.state.username,
                password1: this.state.password1,
                password2: this.state.password2,
            })
            .then(response => {
                console.log(response.data)
                this.props.login(response.data.key, this.state.username)
            })
            .catch(error => {
                console.log(error.response)
                alert(error.response.data.error)
            })
        }
        
    }

    render(){
        return(
            <div className='reg-page'>
           <RegBox>
                <h1>Registration</h1>
                    <InputBox>
                        <Input name='username' placeholder="Username"   value={this.state.username}  onChange={this.changeHandler}/>
                        <Input name='password1' placeholder="Password"  value={this.state.password1} onChange={this.changeHandler}/>
                        <Input name='password2' placeholder="Re-type Password"  value={this.state.password2} onChange={this.changeHandler}/>
                        <Btn onClick={this.registerHandler} to='/game'>Play</Btn>
                        <Route path="/game" component={Game} />
                    </InputBox>
            </RegBox>
            </div> 
        )
    }
}
export default Registration; 