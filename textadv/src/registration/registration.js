import React, { Component } from 'react';
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

class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            //create empty objects for the registration. 
            username: '',
            password1: '',
            password2: ''
        } 
    }
    //allows for change in the input.
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    //the registerHandler handles the registration of a new user.
    //before you move onto the the .post you must check the two passwords 
    //being passed in, and they need to be the same inorder to register.
    //in the post once the passwords are the same and the username has not
    //been used post the new username and password to the api/registration page.
    //.then use the loginHandler from App.js, which is passed in as 
    //login, this is used to register the user. generates a key and also username.
    //then push the info to ./game page and also save the info in the history object.
    //then reset the inputs on the registration page to blank.
    
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
                this.props.history.push('/game')
            })
            .catch(error => {
                console.log(error.response)
                alert(error.response.data.error)
            })
        }
        this.setState({username: '', password1: '', password2: ''})        
    }

    render(){
        return(
           <RegBox>
                <h1>Registration</h1>
                    <InputBox>
                        <Input name='username' placeholder="Username"   value={this.state.username}  onChange={this.changeHandler}/>
                        <Input name='password1' placeholder="Password"  value={this.state.password1} onChange={this.changeHandler}/>
                        <Input name='password2' placeholder="Re-type Password"  value={this.state.password2} onChange={this.changeHandler}/>
                        {/* <Route path="/games" render={props => <Game {...props}/>} /> */}
                        <button onClick={this.registerHandler}>Play</button>
                    </InputBox>
            </RegBox>
        )
    }
}
export default Registration; 