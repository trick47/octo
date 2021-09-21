import React from 'react';
import styled from "styled-components";
import TeamCard from "./TeamCard";

const TeamDiv = styled.div `
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    }
`

const Teams = styled.div`
    height: 100%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   /* box-shadow: 1px 1px 20px -5px #ffffff75; */
`

const TeamHeader = styled.div `
    background-color: black; 
    display: flex;
    justify-content: space-between; 
    height: 20%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 1px 1px 20px -5px #ffffff75; 
    `
const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;
  margin-right: 2rem;

  &:before {
    content: '◀';
    margin: 0 10px;
  }
  
  &:after {
    content: '▶';
    margin: 0 10px;
  }
`;



const TeamHeaderName = styled.p`
    font-size: 1.5rem;
    margin-left: 2rem;
    color: white; 
    display: flex; 
    justify-content: center;
    align-items: center;   
`;


const TeamContainer = () => {
    return <>
         <TeamDiv>
            <Teams>
                <TeamHeader>
                        <TeamHeaderName>Teams</TeamHeaderName>
                        <Label/>
                </TeamHeader>
                <TeamCard/>
                <TeamCard/>
            </Teams>
        </TeamDiv>
    </>
};

export default TeamContainer