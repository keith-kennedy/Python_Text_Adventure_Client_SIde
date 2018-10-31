import React, { Component } from 'react';
import styled from 'styled-components';
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
    width: 350%;
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
            north: 'n',
            south: 's',
            west: 'w',
            east: 'e',
        }
    }
    changeHandler = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }
    getRooms = () => {
        axios.get('https://textadv.herokuapp.com/admin/adventure/room/', {

        })
    }
    render(){
        return(
            <WholePage>
            <div>
                    <TextBox>
                    </TextBox>
                    <GameInput placeholder='Enter Text Here' onChange={this.changeHandler}/>
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
