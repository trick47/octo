import React from "react";
import styled from "styled-components";
import teamAvatar from "../../../../assets/images/teamAvatar.png";
import avatarWhite from "../../../../assets/svgs/avatarWhite.svg"


const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    border-radius: 4px;
    height: 200px;
    width: 40%;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    
  
    display: grid;
    grid-template-columns:150px auto auto;
    grid-template-rows: auto auto 100px;
    grid-template-areas: 
      "left top-right top-right top-right"
      "left top-right top-right top-right"
      "left bottom-right bottom-right bottom-right"
      ; 
`;

const CardLeft = styled.div`
    grid-area: left;
    display: flex;
    justify-content: center;  
    align.items: center; 
`;

const CardTopRight = styled.div`
    grid-area: top-right;
    padding: 2rem;
    padding-bottom: 0.5rem;
`;

const CardBottomRight = styled.div`
    grid-area: bottom-right;
`;

const TeamIcon = styled.img`
    height: 80px;
    width: 80px;
    margin: 1rem; 
    border-radius: 50%; 
    box-shadow: 1px 1px 20px -5px #ffffff;  
`;

const TeamName = styled.p`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: white; 
`;

const TeamMembersIcon = styled.img `
    height: 50px;
    width: 50px;
    margin: 1rem; 
`

const TeamCard = () => {
    return <>
    <Container>
        <CardLeft>
            <TeamIcon src = { teamAvatar || 'https://via.placeholder.com/50x50' }/>
        </CardLeft>
        <CardTopRight>
            <TeamName>We are the OCTO!!!</TeamName>
        </CardTopRight>
        <CardBottomRight>
            <TeamMembersIcon src={ avatarWhite }/>
            <TeamMembersIcon src={ avatarWhite }/>
            <TeamMembersIcon src={ avatarWhite }/>
            <TeamMembersIcon src={ avatarWhite }/>
        </CardBottomRight>
    </Container>
    </>
};

export default TeamCard