import styled from 'styled-components';
import React from 'react';
import Popup from 'reactjs-popup';
import { PageContentPicture, OvalContainer2, OvalBlue2, OvalWhite2, TitleHead  } from './SelectSport';
// import octoLogo from '../../assets/svgs/Slicehead.svg';



export const PageContentPicture2 = styled(PageContentPicture)`

    &:hover {
        
        transform:scale(1);
        filter:blur(0px);
        opacity:1;
        box-shadow:0 8px 20px 0px rgba(0,0,0,0.125);
        
    }

`

export const InnerContainer = styled.div`
    //border: solid yellow;
    
    width: 100%;
    height:50%;
    padding-bottom: 13%;
    margin-top: 5.5%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color:white;
    }
    
`

export const ButtonContainer = styled.button`
    
    padding:30px;
    margin:2%;
    width:20%;
    border:1px solid white;
    border-radius:50px; 
    transition:.2s all;
    font-weight: bold; 
    filter:blur(1px);
    opacity:.5;
    transform: scale(.98);
    cursor: pointer;
	letter-spacing: 1em;
    transition: width 2s;
    

    &:hover {
        width: 500px;
        color: #19c5db;
        background: white;
        border: 1px solid #19c5db;
        filter:blur(0px);
        opacity:1;
        -webkit-box-shadow: 0px 20px 35px -16px rgba(255, 159, 16, 0.6);
        -moz-box-shadow: 0px 20px 35px -16px rgba(255, 159, 16, 0.6);
        box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.6);      

        
    }

    
`


export const ContentBox = styled.div`
    color: whitesmoke;
    opacity: 0.8;
    padding: 30%;
    width: 200%;
    letter-spacing: 0.1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid white;
`

export const OctoLogo = styled.img`
    width: 60%;
    margin: 0;
    position: fixed;
    z-index: 1;
    top:55.4% ;
    left: 35%;
    

    &:hover {

        animation: shake 10.82s cubic-bezier(.36, .07, .19, .97) both infinite;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
    }

    @keyframes shake {
        .76%, 6.84% {transform: translate3d(-1px, 0, 0)}
        1.52%, 6.08% {transform: translate3d(2px, 0, 0)}
        2.28%, 3.8%, 5.32% {transform: translate3d(-4px, 0, 0)}
        3.04%, 4.56% {transform: translate3d(4px, 0, 0)}
    }
    
    
    
`

export const TitleHead2 = styled(TitleHead)`
   
    //margin-bottom: 6%;
    
    
`






export const PrivateOrPublic = (props) => {

    const privateHandler = () => {
        props.selectPrivacy(true)
    }

    const publicHandler = () => {
        props.selectPrivacy(false)
    }

    return (
        <>

        <PageContentPicture2>
            <TitleHead>Select a lobby:</TitleHead>
            <InnerContainer>
                <Popup trigger={() => (
                    <ButtonContainer onClick={publicHandler}>PUBLIC </ButtonContainer>)} position="bottom center" on='hover'>
                        <br/> 
                    <ContentBox>  Everyone can join. </ContentBox>
                </Popup>
        
                <Popup trigger={() => (
                    <ButtonContainer onClick={privateHandler}>PRIVATE</ButtonContainer>)} position="bottom center" on='hover'>
                        <br/> 
                    <ContentBox> Participans can only join <br/> with invitations. </ContentBox>
                </Popup>
            </InnerContainer>

            <OvalContainer2>
                <OvalWhite2 />
                <OvalBlue2 />
                <OvalWhite2 />
            </OvalContainer2>
            
            
        </PageContentPicture2>

        </>



    )
}

export default PrivateOrPublic