import styled from 'styled-components';
import React from 'react';
import home from '../assets/svgs/home.svg';
import tIcon from '../assets/svgs/happy.svg';
import octoIcon from '../assets/svgs/octo-menu-icon.svg';
import signup from '../assets/svgs/signup.svg';
import login from '../assets/svgs/user.svg';
import { NavLink } from 'react-router-dom';
import logout from '../assets/svgs/enter.svg';
import about from '../assets/svgs/aboutUs.svg';
import contact from '../assets/svgs/mail.svg';
import vote from '../assets/svgs/vote.svg';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, apiUserGetData } from '../store/actions/userAction';


export const MenuContainer = styled.div`
    padding-top: 4%;
    padding-bottom: 4%;
    padding-left: 3.3%;
    position: fixed;  
    z-index: 100;
    top: 13.3%;
    left: 0;
    right: 1%;
    background-color: black;
    overflow:hidden;
    transition:width .3s ease;
    cursor:pointer;
    //border: 0.5px solid white;
    box-shadow: 1px 1px 20px -5px #ffffff75;
    display: flex;
    overflow: hidden;
    
    &:hover {
        width: 20%;
    }

    @media screen and (min-width: 600px) {
        width: 5%;
    }

    .active{
        color: #00ECFF;
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
    const history = useHistory();
    const dispatch = useDispatch();
    
    const userIsLoggedIn = useSelector((state) => state.user.token ? state.user.token : localStorage.userToken); // prevent log-out by page refresh
    const userID = useSelector((state) => state.user.userData.id); // prevent log-out by page refresh

    useEffect(() => {
        dispatch(apiUserGetData(userIsLoggedIn))
    }, [userIsLoggedIn, dispatch])


    const logoutHandler = () => {
        dispatch(setToken(null));
        localStorage.clear();
    }


   
    // check users tournaments and if it matches current id

    return (
        <MenuContainer>
            
            <InnerLinksContainer>
                    <IndividualLinksContainer>
                    <img onClick={(e) => history.push(`/`)} src={home} alt='home'/>
                        <NavLink activeClassName="active" to='/'>HOME</NavLink>



                    </IndividualLinksContainer>
    
      
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/tournaments')} src={tIcon} alt='tournaments'/>
                        <NavLink activeClassName="active" to='/tournaments'>TOURNAMENTS</NavLink>
                        
                        
                    </IndividualLinksContainer>
      
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/create')} src={vote} alt='create'/>
                        <NavLink activeClassName="active" to='/create'>CREATE TOURNAMENT</NavLink>
                        
                        
                    </IndividualLinksContainer>


                    {
                            userIsLoggedIn ? 


                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push(`/user/${userID}`)} src={octoIcon} alt='dashboard'/>
                    <NavLink activeClassName="active" to={`/user/${userID}`}>MY PROFILE</NavLink>
                    
                    
                </IndividualLinksContainer> : null }


                    {
                            userIsLoggedIn ? 


                    <IndividualLinksContainer>
                    <img onClick={logoutHandler} src={logout} alt={'logout'}/>
                    <NavLink onClick={logoutHandler} activeClassName="active" to='/login'>LOG OUT</NavLink>
                    
                    
                </IndividualLinksContainer> :
                        
                    (<>
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/login')} src={login} alt='login'/>
                        <NavLink activeClassName="active" to='/login'>SIGN IN</NavLink>
                        
                        
                    </IndividualLinksContainer>
                    <IndividualLinksContainer>
                        <img onClick={(e) => history.push('/registration')} src={signup} alt='registration'/>
                        <NavLink activeClassName="active" to='/registration'>SIGN UP</NavLink>
                        
                        
                    </IndividualLinksContainer>

                    </>)
                    }
                    <IndividualLinksContainer>
                    <img onClick={(e) => history.push(`/aboutus`)} src={about} alt='about us'/>
                        <NavLink activeClassName="active" to='/aboutus'>ABOUT</NavLink>

                    </IndividualLinksContainer>

                    <IndividualLinksContainer>
                    <img onClick={(e) => history.push(`/contactus`)} src={contact} alt='contact us'/>
                        <NavLink activeClassName="active" to='/contactus'>CONTACT</NavLink>

                    </IndividualLinksContainer>
        
                </InnerLinksContainer>




                    

        
    
        </MenuContainer>


    )
}

export default SideMenu