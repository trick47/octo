import React from "react";
import styled from "styled-components";
import tennis from "../../../../assets/svgs/tennis.svg";

const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    border-radius: 4px;
    height: 100px;
    width: 90%;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    
    display: grid;
    grid-template-columns:150px auto auto;
    grid-template-rows: auto auto 100px;
    grid-template-areas: 
      "left middle right"
      "left middle right"
      ; 
`;

const Left = styled.div `
    grid-area: left;
    display: flex;
    justify-content: center;  
`

const Middle = styled.div `
    grid-area: middle;
    display: flex;
    justify-content: center;
    align-items: center;    
`
const Right = styled.div `
    grid-area: right;
    display: flex;  
    justify-content: center;
    align-items: center;  
`

const SportIcon = styled.img`
    height: 70px;
    width: 70px;
    margin: 1rem;
     
     &:hover {
        cursor: pointer;
        width: 60%;
        box-shadow: 1px 1px 20px -5px #ffffff; 
    }
`;

const Sport = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem;
    color: white;
    margin: 1rem;  
`;

const Team = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem;
    color: white;
    margin: 1rem;  
`;

const Location = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem;
    color: white;
    margin: 1rem;
`;

const Company = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem;
    color: white;
    margin: 1rem; 
`

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

const TournamentCard = () => {
    return <>
        <Container>
            <Left>
                <SportIcon src = { tennis || 'https://via.placeholder.com/50x50' }/>
            </Left>
            <Middle>
                <Sport>Sport:Tennis</Sport>
                <Team>Team:OCTO</Team>
                <Location>Zurich</Location>
                <Company>Propulsion Academy</Company>
            </Middle>
            <Right>
                <Button type='submit'>TOURNAMENTS</Button>
            </Right>
        </Container>
    </>
}
export default TournamentCard