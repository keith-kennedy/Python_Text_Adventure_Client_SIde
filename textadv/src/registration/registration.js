import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Game from '../game/game'
import styled from 'styled-components'

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
        this.setState =({[event.target.name]: event.target.value})
    }

    render(){
        return(
            <div className='reg-page'>
           <RegBox>
                <h1>Registration</h1>
                    <InputBox>
                        <Input type="text" name="username" placeholder="username"  value={this.state.username} onChange={this.changeHandler} />
                        <Input type="text" name="username" placeholder="password1"  value={this.state.password1} onChange={this.changeHandler}/>
                        <Input type="text" name="username" placeholder="password2"  value={this.state.password2} onChange={this.changeHandler}/>
                        <Btn to='/game'>Play</Btn>
                        <Route path="/game" component={Game} />
                    </InputBox>
            </RegBox>
            </div> 
        )
    }
}
export default Registration; 