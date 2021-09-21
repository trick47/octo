import styled from "styled-components";
import React from 'react';
//import TournamentCard from "./TournamentCard";
import TournamentCard from "../../../components/TournamentCard";



const TournamentDiv = styled.div `
    //border: solid red;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    }
`

const Tournaments = styled.div`
    //border: solid green;
    height: 100%;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
   /* box-shadow: 1px 1px 20px -5px #292d3dd3; */
`

const Header = styled.div `
    //border: solid blue;
    background-color: black; 
    display: flex;
    justify-content: space-between; 
    margin: 2% 0;
    height: 90px;
    width: 83%;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
`
/* const Label = styled.span`
    //border: solid purple;
    display: flex;
    align-items: center;
    line-height: 1.2;
    margin-right: 2rem;
    cursor: pointer;

    p {
        font-size: 30px;
        margin: 0 10px;

        &:hover {
            color: #19c5db;
        }

        :active {
            transform: translateY(4px);
        }

    }
  
`; */
const Name = styled.p`
    font-family: monospace;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: white; 
    display: flex; 
    justify-content: center;
    align-items: center;  
`;

const CurrentTournament = (props) => {

    return <>
        <TournamentDiv>
            <Header>
                <Name>Current Tournaments </Name>
            </Header>
            {
            props.user ?
            <Tournaments>

                {
                    props.user.my_tournaments.map((tournament, index) => {
                        if (tournament.private && !props.showPrivate) return null
                        else return (<TournamentCard key={index} tournament={tournament}/>)
                    })
                }
                {
                    props.user.part_in_tournaments.map((tournament, index) => {
                        if (props.user.id !== tournament.organizer) {
                            
                            return <TournamentCard key={index} tournament={tournament}/>

                        } 
                        else return null
                    })
                } 
            </Tournaments>
            : null
            }
        </TournamentDiv>
    </>
}

export default CurrentTournament