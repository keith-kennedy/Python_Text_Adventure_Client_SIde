import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import Game from '../game/game'
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
            <div className='reg-box'>
                <h1>Registration</h1>
                <input type="text" name="username" placeholder="username" className="input" value={this.state.username} onChange={this.changeHandler} />
                <input type="text" name="username" placeholder="password1" className="input" value={this.state.password1} onChange={this.changeHandler}/>
                <input type="text" name="username" placeholder="password2" className="input" value={this.state.password2} onChange={this.changeHandler}/>
                <NavLink  to='/game' className = 'btn'>Play</NavLink>
                <Route path="/game" component={Game} />
            </div>
            </div> 
        )
    }
}
export default Registration; 