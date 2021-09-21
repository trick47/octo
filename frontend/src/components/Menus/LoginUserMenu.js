import styled from 'styled-components';
import React from 'react';
import home from '../../assets/svgs/home.svg';
import bracket from '../../assets/svgs/fixtures.svg';
import octoIcon from '../../assets/svgs/octopus1.svg';
import happy from '../../assets/svgs/vote.svg';
import ranking from '../../assets/svgs/top.svg';
import logout from '../../assets/svgs/enter.svg';
import eye from '../../assets/svgs/eye.svg';
import admin from '../../assets/svgs/settings1.svg';
import { Link } from 'react-router-dom';
import { MenuContainer, InnerLinksContainer, IndividualLinksContainer, SingContainer } from './Menu';

const MenuContainer2 = styled(MenuContainer)`
    top: 4.5%;
`

export const LoginInUserSideMenu = () => {


    return (
        <MenuContainer2>
            
            <InnerLinksContainer>
                    <IndividualLinksContainer>
                        <img src={home} alt={"home"}/>
                        <Link to='/'>HOME</Link>
                        
                    </IndividualLinksContainer>
    
      
                    <IndividualLinksContainer>
                        <img src={happy} alt={"happy"}/>
                        <Link to='/tournaments'>TOURNAMENTS</Link>
                        
                        
                    </IndividualLinksContainer>
      
                    <IndividualLinksContainer>
                        <img src={octoIcon} alt={"octoIcon"}/>
                        <Link to='/create'>CREATE TOURNAMENT</Link>
                        
                        
                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                        <img src={eye} alt={"eyeIcon"}/>
                        <Link to='/tournament/:id'>OVERVIEW</Link>
                        
                        
                    </IndividualLinksContainer>


                    <IndividualLinksContainer>
                        <img src={bracket} alt={"bracket"}/>
                        <Link to='/tournament/:id/bracket'>BRACKETS</Link>
                        
                        
                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                        <img src={ranking} alt={"rank"}/>
                        <Link to='/tournament/:id/standing'>STANDING</Link>
                        
                        
                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                        <img src={admin} alt={"admin"}/>
                        <Link to='/tournament/:id/admin'>ADMIN</Link>
                        
                        
                    </IndividualLinksContainer>

                    <SingContainer>

                    
                    <IndividualLinksContainer>
                        <img src={logout} alt={"logoutIcon"}/>
                        <Link to='/registration'>LOG OUT</Link>
                        
                        
                    </IndividualLinksContainer>
                    </SingContainer>
        
                </InnerLinksContainer>
        
    
        </MenuContainer2>


    )
}

export default LoginInUserSideMenu