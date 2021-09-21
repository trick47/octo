import React from "react";
import styled from "styled-components";
import shark from  "../../assets/svgs/shark.svg"
import { useHistory } from "react-router-dom";


const Container = styled.div`
    //border: solid red;
    margin: 0 auto;
    background-color: black;
    padding: 3%;
    border-radius: 15px;
    height: 350px;
    width: 21%;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    border-right: solid 4px #19c5db;
    display: grid;
    grid-template-rows: 150px auto auto;
    grid-template-areas: 
      "top"
      "middle"
      "bottom"
      ;
      
     &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        box-shadow: 0px 15px 19px -6px rgba(33,115,122,0.6);

        img {
            transform: translateY(-4px);
            
        }
    }

    &:active {
        transform: translateY(4px);
    }
    `
const Top = styled.div `
    margin: 0;
    grid-area: top;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

const Middle = styled.div `
    grid-area: middle;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`

const Bottom = styled.div `
    grid-area: bottom;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
`
const Icon = styled.img`
    height: 78px;
    width: 78px;
    border-radius: 50px;
    margin: 0;
    background-color: white; 
`;

/*const Name = styled.p`
    font-weight: bold;
    font-size: 0.90rem;
    margin: 0.5rem;
    color: white;
    margin-left: 2%;
    margin-right: 8%;
`;*/

const SportType = styled.p `
    //border: solid pink;
    font-weight: bold;
    font-size: 0.90rem;
    color: white;
    margin-left: 2%;
    margin-right: 8%;
`

const Location = styled.p`
    font-weight: bold;
    font-size: 0.90rem;
    color: white;
    margin-left: 3%;
    margin-right: 8%;
`;

/*const Status = styled.p `
    font-weight: bold;
    font-size: 0.90rem;
    color: white; 
    margin-left: 2%;
    margin-right: 8%;
`*/
const ParagContainer = styled.div `
    //border: solid yellow;
    display: flex;
    align-items: center;
    width: 92%;
`



const TournamentCard = (props) => {


    const history = useHistory();

    const handleClick = () => {
        history.push(`/tournament/${props.tournament.id}/overview`);
    }
  
    return <>
        <Container onClick={handleClick}>
            <Top>
                <Icon src={ props.tournament.picture ?  props.tournament.picture : shark } alt="shark"/>    
            </Top>
            <Middle>
                <ParagContainer>
                    <SportType>Name:</SportType> {props.tournament.name}
                </ParagContainer>
                <ParagContainer>
                    <SportType>Sport:</SportType> {props.tournament.sport}
                </ParagContainer>
            </Middle>
            <Bottom>
                <ParagContainer>
                    <Location>Location:</Location>{props.tournament.location}
                </ParagContainer>
            </Bottom>
        </Container>
    </>
};

export default TournamentCard