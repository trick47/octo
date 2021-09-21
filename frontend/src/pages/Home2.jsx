import React from 'react';
import styled from 'styled-components';

import SideMenu from '../components/Menus/Menu.js';
import LoginTopHeader from "../components/HeaderOptions/LoginTopHeader";
import Map from '../components/Map/Map';




const Main = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    align-items: center;
    justify-content: center;
    
`






const TestHome = () => {
    return (
        <Main>
            
            <SideMenu/>
            <LoginTopHeader/>

            <Map/>
            

	


        </Main>
    )
}


export default TestHome