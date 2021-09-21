import React from "react";
import styled from "styled-components";
import TournamentCard from "../components/TournamentCard";
import ball from  "./../assets/svgs/Ball.svg"
import tennis from "./../assets/svgs/tennis.svg"
import pingpong from "./../assets/svgs/pingpong.svg"
//import {TitleHead3} from "./CreateTournament/DetailsTournament";

const Container = styled.div `
  display: flex; 
  flex-flow: row wrap;
  width: 100%; 
  margin: 20px; 
  gap:40px; 
`
const Create = styled.div `
margin: 0 auto;
    background-color: black;
    border-radius: 5px;
    height: 350px;
    width: 18%;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    display: grid;
    grid-template-rows: 100px auto auto;
    grid-template-areas: 
      "top"
      "middle"
      "bottom"
      ;
      
     &:hover {
        box-shadow: 1px 1px 20px -5px #14d1d1;
    }
`

/*const Top = styled.div `
    grid-area: top;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`*/
const Middle = styled.div `
    grid-area: middle;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
`
const Bottom = styled.div `
    grid-area: bottom;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center; 
    align-items: center; 
`
/*const TitleHead4 = styled(TitleHead3)`
    width: 80%; 
`;*/

const Icon = styled.img`
    height: 78px;
    width: 78px;
    color: white; 
`;

const Button = styled.button `
    border-radius: 30px;
    width: 50%;
    height: 45px;
    color: white;
    background: none;
    border: solid 3px #19c5db;
    font-size: small;
    transition: width 1s, height 0.2s;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        width: 60%;
        border: none;
    }

    &:active {
        transform: translateY(4px);
        background: ${props => props.theme.octoGradientBlueColor};
        border: none;
    }
`

const Tournaments = () => {



  return <>
  <Container>
    <Create>
      <Middle>
        <Icon src={ball}/>
        <Icon src={tennis}/>
        <Icon src={pingpong}/>
      </Middle>
      <Bottom>
        <Button>CREATE NOW!!!</Button>
      </Bottom>
    </Create>

    <TournamentCard id={3} />

    <TournamentCard id={5} />
  </Container>
  </>
}
export default Tournaments
