import React from "react";
import styled from "styled-components";

const LandingHolder = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Landing = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ContentHolder = styled.div`
  width: 75%;
  height: auto;
  margin: 10px;
`;
const HeaderText = styled.p`
  font-size: 25px;
`;
const Text = styled.p`
  font-size: 20px;
`;
const FlexStartBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 10px solid #FF4E50; 
`;
const FlexEndBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 10px solid #2F9599;
  border-right: 10px solid #A8E6CE;
  border-bottom: 10px solid #F9D423; 

`;
const LandingPage = () => {
  return (
    <LandingHolder>
      <Landing>
        <FlexStartBox>
            <ContentHolder>
                <HeaderText>Welcome to Color Rooms</HeaderText>
                <Text>A Text Adventure</Text>
                <Text>
                    In Color Rooms you wake up in a unknown location,
                    its your mission to find your way out. You will make 
                    the journey through connected rooms that all are named 
                    after colors.
                </Text>
            </ContentHolder>
            </FlexStartBox>
            <FlexEndBox> 
            <ContentHolder>
            <HeaderText>Directions</HeaderText>
                <Text>How to play</Text>
                <Text>
                    Manuevor through the different rooms suing your arrow keys. Up is North, down is South, left is West, and right is East. All rooms are connected, but also some routes lead to dead ends. Have fun exploring the different rooms. 
                </Text>
            </ContentHolder>
            </FlexEndBox>
            <FlexStartBox>
            <ContentHolder>
            <HeaderText>Players</HeaderText>
                <Text>Connecting with other players</Text>
                <Text>
                    Connect with other players in the same 
                    rooms, using the messanger you can chat 
                    with other players logged on. Figure out 
                    which rooms are dead ends, or just strike 
                    up a conversation with another player. 
                </Text>
            </ContentHolder>
            </FlexStartBox>
      </Landing>
    </LandingHolder>
  );
};
export default LandingPage;
