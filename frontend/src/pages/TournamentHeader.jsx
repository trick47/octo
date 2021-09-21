import styled from 'styled-components';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PageTitle from "../styles/page-title";
import { useHistory } from "react-router-dom";
import bracket from '../assets/svgs/fixtures.svg';
import ranking from '../assets/svgs/top.svg';
import eye from '../assets/svgs/eye.svg';
import admin from '../assets/svgs/settings1.svg';
import {useEffect} from 'react'
import { useSelector } from 'react-redux';


export const InfoBox = styled.div`
    width: 100%;
    display: flex; 
    align-content: center;
    flex-direction: column;

    .active{
        color: #00ECFF;
    }

`




export const IndividualLinksContainer = styled.li`
    
    padding-bottom: 1rem;
    letter-spacing: 0.3em;
    cursor: pointer;

    
    a {
        position: relative;
        display:block;
        top:-35px;
        padding-left: 7px;
        padding-top: 4%;
        margin-left:50px;  // this should be more responsive
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
        cursor:pointer;

        @media screen and(min-width:600px) {
            width:32px;
            height:32px;
            left:-15px;
        }
    }

    display:block;
    float:left;
    padding: 30px; /*adjust*/

`
export const InnerLinksContainer = styled.ul`
    justify-content: center;
    display: flex;
    align-content: center;
    list-style-type: none;
    color:white;
    &:first-child {
        padding-top:1rem;
    }
    padding-top: 30px;

`

export const Header = styled.div`

`

export const Tournament = (props) => {

    const history = useHistory();
    const url = window.location.pathname;
    const url_array = url.split("/");
    const id = url_array[url_array.length - 2];
    const my_tournaments = useSelector((state) => state.user.userData.my_tournaments);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (my_tournaments)
        {
            my_tournaments.forEach(tournament => {
                if (tournament.id === parseInt(id)){
                    setIsAdmin(true)
                }
            })
        }
    }, [my_tournaments, id])

    return (
        <InfoBox>
        <PageTitle pageTitle={props.name}/>   
        <InnerLinksContainer>

            <IndividualLinksContainer>
            <img onClick={(e) => history.push(`/tournament/${id}/overview`)} src={eye} alt='overview'/>
            <NavLink activeClassName="active" to={`/tournament/${id}/overview`}>OVERVIEW</NavLink>
            </IndividualLinksContainer>
                

            <IndividualLinksContainer>
            <img onClick={(e) => history.push(`/tournament/${id}/bracket`)} src={bracket} alt='bracket'/>
            <NavLink activeClassName="active" to={`/tournament/${id}/bracket`}>BRACKET</NavLink>
            </IndividualLinksContainer>

            <IndividualLinksContainer>
            <img onClick={(e) => history.push(`/tournament/${id}/standing`)} src={ranking} alt='standing'/>
            <NavLink activeClassName="active" to={`/tournament/${id}/standing`}>STANDING</NavLink>
            </IndividualLinksContainer>  

            {
                (isAdmin) ?
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/tournament/${id}/admin`)} src={admin} alt='admin'/>
                        <NavLink activeClassName="active" to={`/tournament/${id}/admin`}>ADMIN</NavLink>  
                    </IndividualLinksContainer> 
                
                    : null
            }           
            </InnerLinksContainer>
        </InfoBox>

    )
}

export default Tournament