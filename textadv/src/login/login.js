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


class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        } 
    }
    componentDidMount = () => {
        let token = localStorage.getItem('token');
        let username = localStorage.getItem('username');
        if (token && username) {
          this.setState({loggedIn: true})
        }
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleLogin = (event) => {
        event.preventDefault()
        console.log("lansnjscnk")
        axios.post('https://textadv.herokuapp.com/api/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response, "response line 50 of log in")
            this.props.login(response.data.key, this.state.username)
            this.setState({loggedIn: true})
            this.props.history.push('/game')
        })
        .catch(error => {
            console.log(error.response)
            alert(error.response.data.error)
        })
        this.setState({username: '', password: ''})
    }

    render(){
        return(
            <RegBox>
                <h1>Login</h1>
                    <InputBox onSubmit={this.handleLogin}>
                        <Input  placeholder="Username" name='username' value={this.state.username} onChange={this.changeHandler} />
                        <Input type='password' placeholder="Password" name='password'  value={this.state.password} onChange={this.changeHandler}/>

                        <button>Play</button>
                    </InputBox>
            </RegBox>
        )
    }
}

export default Login; 


