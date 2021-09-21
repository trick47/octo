import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { ContentBox } from '../../pages/CreateTournament/PrivateOr';
import arrow from '../../assets/svgs/arrow.svg';

import user from '../../assets/svgs/user2.svg';
import editIcon from '../../assets/svgs/edit.svg';
import infosign from '../../assets/svgs/infobutton.svg';
import more from '../../assets/svgs/menu.svg';
import octopus from '../../assets/svgs/octopus2.svg'; 


export const InfoBox = styled.div`
    //border: solid red;
    cursor: pointer;
    z-index: 100;
    width: 25%;
    display: flex; 
    justify-content: space-between;
    position: fixed;
    right: 36%;
    top: 3em;
    box-shadow: 0px 15px 35px -16px rgba(125, 249, 255, 0.6);

`

export const ContentBox2 = styled(ContentBox)`
    outline: none;
    border: none;
    padding: 10%;
    padding-bottom: 5%;
    padding-left: 15%;
    width: 190px;
    height: 145px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //border: solid blue;
    opacity: 1;
    font-size: 1em;
    background: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 5%;
    box-shadow: 0px 15px 35px -16px rgba(125, 249, 255, 0.6);
    
    


    a {
        text-decoration: none;
        outline: none;
        color: black;
        font-size: 14px;
        //border: solid yellow;
        width: 100%;
        font-weight: bold;
        //text-align: center;
        margin: 2%;
        margin-top: 2%;

        &:hover {
            color: #00ECFF;
        }

        img {
            margin-right: 5%;
            height: 12px;
        }
    }

    
`
export const HeaderTitle = styled.h3`
    // border: solid red;
    font-weight: bold;

    &:hover {
        color: rgba(255,255,255,0.5);
        
    }
`

export const SmallDescription = styled.p`
    font-size: 10px;
    width: 100%;
    color: grey;
    font-weight: bold;
    padding-left: 1%;

    img {
        height: 14px;
        padding-top: 3%;
        padding-left: 3%;
    }
`




export const LoginTopHeader = () => {


    return (
        <InfoBox>

            <Popup trigger={() => (
                <HeaderTitle>Profile</HeaderTitle>)} position="bottom center" on='hover'>
                     
                <ContentBox2> 
                    <Link to='/user/profile'> 
                        <img src={user} alt='user'/> 
                            Profile
                        <SmallDescription>Check your user profile
                            <img src={arrow} alt='arrow'/>
                        </SmallDescription>
                    </Link>
                    <Link to='/user/profile/edit'> 
                        <img src={editIcon} alt='edit'/>
                            Edit Profile
                        <SmallDescription>Ready for some changes?
                            <img src={arrow} alt='arrow'/>
                        </SmallDescription>
                    </Link>
                </ContentBox2>
            </Popup>

            <Popup trigger={() => (
                <HeaderTitle>About Us</HeaderTitle>)} position="bottom center" on='hover'>
                     
                <ContentBox2> 
                    <Link to='/contactus'>
                        <img src={infosign} alt='info'/>
                            Contact
                        <SmallDescription>Email Us
                            <img src={arrow} alt='arrow'/>
                        </SmallDescription>
                    </Link>
                    <Link to='/aboutus'>
                        <img src={more} alt='info'/>
                            Learn More
                        <SmallDescription>Behind the App!
                            <img src={arrow} alt='arrow'/>
                        </SmallDescription>
                    </Link>
                </ContentBox2>
            </Popup>

            <Popup trigger={() => (
                <HeaderTitle>Create Tournament</HeaderTitle>)} position="bottom center" on='hover'>
                     
                <ContentBox2> 
                    <Link to='/create'>
                        <img src={octopus} alt='octo logo'/>
                            Create Tournament
                        <SmallDescription>Get Started!
                            <img src={arrow} alt='arrow'/>
                        </SmallDescription>
                    </Link> 
                </ContentBox2>
            </Popup>
        
        </InfoBox>


    )
}

export default LoginTopHeader