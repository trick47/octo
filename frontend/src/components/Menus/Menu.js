import styled from 'styled-components';
import React from 'react';
import home from '../../assets/svgs/home.svg';
import tIcon from '../../assets/svgs/happy.svg';
import octoIcon from '../../assets/svgs/octopus1.svg';
import signup from '../../assets/svgs/signup.svg';
import lupa from '../../assets/svgs/lupa.svg';
import login from '../../assets/svgs/user.svg';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 3.3%;
    position: fixed;  
    z-index: 100;
    top: 14%;
    left: 0;
    right: 1%;
    background-color: black;
    overflow:hidden;
    transition:width .3s ease;
    cursor:pointer;
    //border: 0.5px solid white;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    display: flex;
    
    &:hover {
        width: 20%;
    }

    @media screen and (min-width: 600px) {
        width: 5%;
    }

`

export const InnerLinksContainer = styled.ul`
    list-style-type: none;
    color:white;
    &:first-child {
        padding-top:1rem;
    }
`

export const IndividualLinksContainer = styled.li`
    
    padding-bottom: 1rem;
    letter-spacing: 0.3em;
    
    a {
        position: relative;
        display:block;
        top:-35px;
        padding-left: 7px;
        padding-top: 4%;
        margin-left:25px;
        margin-right:10px;
        text-decoration: none;
        color:white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 12px;
        
        &:after {
            content:'';
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            left:0;
            background:radial-gradient(circle at 94.02% 88.03%, #19c5db, transparent 100%);
            opacity:0;
            transition:all .5s ease;
            z-index: -10;
        }
    }

    &:hover a:after {
        opacity:1;
    }

    img {
        width: 30px;
        height:30px;
        position: relative;
        left:-25px;
        cursor:pointer;

        @media screen and(min-width:600px) {
            width:32px;
            height:32px;
            left:-15px;
        }
    }

   
`

export const SingContainer = styled.div`
    // border: solid yellow;
    height: 10%;
    margin-top: 30%;
`



export const SideMenu = () => {


    return (
        <MenuContainer>
            
            <InnerLinksContainer>
                    <IndividualLinksContainer>
                        <img src={home} alt={"homeIcon"}/>
                        <Link to='/'>HOME</Link>
                        
                    </IndividualLinksContainer>
    
      
                    <IndividualLinksContainer>
                        <img src={tIcon} alt={"tIcon"}/>
                        <Link to='/tournaments'>TOURNAMENTS</Link>
                        
                        
                    </IndividualLinksContainer>
      
                    <IndividualLinksContainer>
                        <img src={octoIcon} alt={"octoIcon"}/>
                        <Link to='/create'>CREATE TOURNAMENT</Link>
                        
                        
                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                        <img src={lupa} alt={"searchIcon"}/>
                        <Link to='/'>SEARCH</Link>
                        
                        
                    </IndividualLinksContainer>

                    <SingContainer>

                    <IndividualLinksContainer>
                        <img src={login} alt={"loginIcon"}/>
                        <Link to='/login'>SIGN IN</Link>
                        
                        
                    </IndividualLinksContainer>
                    <IndividualLinksContainer>
                        <img src={signup} alt={"signupIcon"}/>
                        <Link to='/registration'>SIGN UP</Link>
                        
                        
                    </IndividualLinksContainer>
                    </SingContainer>
        
                </InnerLinksContainer>
        
    
        </MenuContainer>


    )
}

export default SideMenu