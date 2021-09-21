import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export const InfoBox = styled.div`
    position: fixed;
    right: 2em;
    bottom: 5em;

    ul {
        list-style: none;
    }
`
export const Link2 = styled(Link)`
    color: white;
    text-decoration: none;
    text-align: right;
    padding: 0.5em 0;
    transition: all 0.1s ease-out;
    display: block;
    text-transform: uppercase;
    
    font-size: 1.25em;
    font-weight: 700;
    letter-spacing: 1px;

    &:hover {
        color: rgba(255,255,255,0.5);
    }
`



export const LogInHeader = () => {


    return (
        <InfoBox>

            <ul>
                <li><Link2 to='/user/profile'>Profile</Link2></li>
                <li><Link2 to='/create'>Create Tournament</Link2></li>
                <li><Link2 to=''>About Us</Link2></li>
            </ul>
            
            
        
    
        </InfoBox>


    )
}

export default LogInHeader