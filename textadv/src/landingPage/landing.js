import React from 'react';
import styled from 'styled-components'

const LandingHolder = styled.div`
    width: 90%; 
    height: auto; 
    margin: auto; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    border: 1px solid black; 
`

const Landing = styled.div`
    border: 1px solid black; 
    width: 70%;
    margin: 10px; 
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    border-radius: 5px;  
    width: 95%;
    height: auto; 
    border: 1px solid black; 
`
const HeaderText = styled.p`
    font-size: 25px; 
`
const Text = styled.p`
    font-size: 20px; 
`
const MiddleContent = styled.div`
    border: 1px solid black; 
    width: 95%; 
    height: auto; 
    border-radius: 5px;
    margin: 10px 0;   
`
const BottomContent = styled.div`
    border: 1px solid black; 
    width: 95%; 
    height: auto;
    border-radius: 5px;  
`
const LandingPage = () => {
    return(
        <LandingHolder>
            <Landing>
            <Header>
                <HeaderText>Welcome to Color Rooms</HeaderText>
                <Text>A Text Adventure</Text>
                <Text>
                    In Color Rooms you wake up in a unknown location,
                    its your mission to find your way out. You will make 
                    the journey through connected rooms that all are named 
                    after colors.
                </Text>
            </Header> 
            <MiddleContent>
            <HeaderText>Directions</HeaderText>
                <Text>How to play</Text>
                <Text>
                    Manuevor through the different rooms suing your arrow keys. Up is North, down is South, left is West, and right is East. All rooms are connected, but also some routes lead to dead ends. Have fun exploring the different rooms. 
                </Text>
            </MiddleContent>
            <BottomContent>
            <HeaderText>Players</HeaderText>
                <Text>Connecting with other players</Text>
                <Text>
                    Connect with other players in the same 
                    rooms, using the messanger you can chat 
                    with other players logged on. Figure out 
                    which rooms are dead ends, or just strike 
                    up a conversation with another player. 
                </Text>
            </BottomContent>
            </Landing>
        </LandingHolder>
    )
}
export default LandingPage; 