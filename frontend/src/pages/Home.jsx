import React from 'react';
import styled from 'styled-components';
//import { Link } from 'react-router-dom';
import Message from '../pages/CreateTournament/message';

const Main = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
`

/*const Links = styled.div`
    margin: 0px auto;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    a { color: white; }

`*/


const Home = () => {
    return (
        <Main>
            <Message/>
        </Main>
    )
}


export default Home