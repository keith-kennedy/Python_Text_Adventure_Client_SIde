import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const TextBox = styled.div`
    display: flex; 
    justify-content: flex-start
    width: 50%;
    height:350px;
    border: 1px solid white;
    background: white; 
`

class Game extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <h1>Rooms of Color</h1>
                <TextBox>
                </TextBox>
            </div>
        )
    }
}
export default Game; 
