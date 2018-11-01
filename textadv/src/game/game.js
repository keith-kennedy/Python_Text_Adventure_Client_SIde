import React, { Component } from 'react';
import styled from 'styled-components';
import Pusher from 'pusher-js';
import axios from 'axios';

const WholePage = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: flex-start;
`
const Sections = styled.section`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 530px;
    width: 4%;
`
const TextBox = styled.div`
    display: flex; 
    width: 60%;
    height:350px;
    border: 5px solid lightgray;
    border-radius: 20px;
    background: white; 
    margin: 5px;
`
const GameInput = styled.input`
    width: 350%;
    display: flex; 
    margin: 5px;
    height: 40px;
    border-radius: 10px; 
    text-decoration: none
    border: 5px solid lightgray;
`
const ConvoInvo = styled.div`
    display: flex; 
    width: 950%;
    height: 165px;
    border-radius: 20px;
    margin: 5px; 
    background: white;
    border: 5px solid lightgray;
`
class Game extends Component{
        constructor(){
            super();
            this.state={
            input: '',
            title: '',
            description:'',
            past: [],
            players: [],
            }
        }

        changeHandler = (event) => {
            this.setState({[event.target.name]: event.target.value})
        }

        pusher = (uuid) => {
            const p = new Pusher('f2508e405db0f184782c', {cluster: 'us2'});
            const channel = p.subscribe(`p-channel-${uuid}`, uuid);
            channel.bind('broadcast', data => {
                this.updatePast(data.message);
            });
        };

        updatePast = (message = null) =>{
            const past = this.state.past;
            let newItem;
            if(message !== null){
                newItem = {message: message};
            }else{
                newItem = {
                    title: this.state.title,
                    description: this.state.description,
                    players: this.state.players
                };
            }
            past.unshift(newItem)
            this.setState({past: past})
        }

        message = event => {
            event.preventDefault();
            if(this.state.input ===''){return};
            const key = localStorage.getItem('token')
            axios.post('https://textadv.herokuapp.com/api/adv/say/', {"message": this.state.input},{
                headers: {
                    Authorization: `Token ${key}`,
                    "Content-Type": 'application/json'
                }
            })
            .then(response => {
                console.log('say')
                this.setState({
                    input: ''
                }, () => this.updatePast(response.data.message));
            })
            .catch(err => console.log(err));
        }
        componentDidMount = () => {
            const key = localStorage.getItem('token')
            console.log(key, "this is the key")
            axios
                .get('https://textadv.herokuapp.com/api/adv/init/', {headers: {Authorization: `Token ${key}`} })
                .then(response => {
                   this.pusher(response.data.uuid);
                   this.setState({
                       title:response.data.title,
                       description:response.data.description,
                       players: response.data.players
                   }, () => this.updatePast());
            })
                .catch(err => console.log(err, "cdm"));
                window.addEventListener('keydown', this.KeyDown);
        }

        KeyDown = event => {
            const code = event.keyCode;
            const mapping = {37: 'w', 38: 'n', 39: 'e', 40: 's'};
            if(code in mapping){
                const direction = mapping[code];
                this.move(direction)
            }
        }

        move = (direction) => {
            const key = localStorage.getItem('token')
            axios.post('https://textadv.herokuapp.com/api/adv/move/', {'direction': direction}, {
                headers: {
                    Authorization: `Token ${key}`,
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if(response.data.error_msg){
                    this.updatePast(response.data.error_msg);
                }else{
                    this.setState({
                        title: response.data.title,
                        description:response.data.description,
                        players: response.data.players
                    }, () => this.updatePast());
                }
            })
            .catch(err => console.log(err));
        }



        render() {
            const past = this.state.past.slice().reverse();
            return(
            <WholePage>
                <div>
                        <TextBox>
                            <div>
                                {past.map(pastItem => {
                                    if(pastItem['message']){
                                        return(
                                            <div key={Math.random()}>
                                                <div>{pastItem.message}</div>
                                            </div>)
                                    }else{
                                        return(
                                            <div key={Math.random()}>
                                                <div>{pastItem.title}</div>
                                                <div>{pastItem.description}</div>
                                                <div>{pastItem.players.join(", ")}</div>
                                            </div>
                                        )
                                    }
                                }
                            )}
                            </div>
                        </TextBox>
                        <form onSubmit = {this.message}>
                        <GameInput
                            placeholder='Message other players'
                            onChange={this.changeHandler}
                            value={this.state.input}
                            name='input'
                            />
                        </form>
                </div>
                <Sections>
                        <ConvoInvo>
                        </ConvoInvo>
                        <ConvoInvo>
                        </ConvoInvo>
                </Sections>
            </WholePage>
            )
        }
    }

export default Game; 
