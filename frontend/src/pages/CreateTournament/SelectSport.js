import styled from 'styled-components';
//import { Link,  } from 'react-router-dom';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import OctoWall from './RigthContainer';
// import octoLogo from "../../assets/svgs/octo-text-outline_2p.svg";
// import { apiUserLogin } from '../../store/user';
// import octo from "../../assets/svgs/octopus_poly_white.svg";
// import octo from "../../assets/images/octopus_poly.png";
import ball from "../../assets/svgs/Ball.svg";
import tennis from "../../assets/svgs/tennis.svg";
import tennisBall from "../../assets/svgs/tennisBall.svg";
import pingpong from "../../assets/svgs/pingpong.svg";
import { OvalContainer, OvalBlue, OvalWhite  } from '../Login/SingUp/EmailForm';
//import Message from './message';


export const PageContentPicture = styled.div`
    //border: solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    padding: 0 6%;
    min-height: 100%; 
    min-width: 100%; 
    margin: 0;

    a {
        color: white;
    }

    
`

export const TitleHead = styled.div`
    // border: solid green;
    padding-left: 4%;
    width: 22ch;
    color: white;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    margin-bottom: 2%;

    @keyframes typing {
        from { width: 0
        }
    }
    
    @keyframes blink {
        50% { border-color: transparent
        }
    }
    
`




export const CardsContainers = styled.div`
    //border: solid yellow;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 30%;
    margin: 0;
    padding: 0;
    transform: scale(0.48);
    
    &:hover {
        transform: scale(0.54);
    }
    
`

export const InnerContainer = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin: 20px auto;
    width: 500px;
    height: 500px;
    background: black;
    border-radius: 100px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: lighter;
    letter-spacing: 2px;
    transition: 1s box-shadow;

    &:hover {
        box-shadow: 0 5px 35px 0px rgba(0,0,0,.1);
    }


    &:hover::before, &:hover::after {
        display: block;
        content: '';
        position: absolute;
        width: 500px;
        height: 500px;
        background: #19c5db;
        border-radius: 100px;
        z-index: -1;
        animation: 1s clockwise infinite;
    }
    
    &:hover:after {
        background: white;
        animation: 2s counterclockwise infinite;
    }

    @keyframes clockwise {
        0% { top: -5px; left: 0;}
        12% { top: -2px; left: 2px; }
        25% { top: 0; left: 5px;}
        37% { top: 2px; left: 2px;}
        50% { top: 5px; left: 0;}
        62% { top: 2px; left: -2px; }
        75% { top: 0; left: -5px; }
        87% { top: -2px; left: -2px; }
        100% { top: -5px; left: 0; }
    }

    @keyframes counterclockwise {
        0% { top: -5px; right: 0; }
        12% { top: -2px; right: 2px;}
        25% { top: 0; right: 5px;    }
        37% { top: 2px; right: 2px;}
        50% { top: 5px; right: 0;}
        62% { top: 2px; right: -2px; }
        75% { top: 0; right: -5px; }
        87% { top: -2px; right: -2px; }
        100% { top: -5px; right: 0; }
    }

    
    
`

/* export const Divider = styled.div`
    background-color: white;
    height: 1px;
    width: 200px;
`

export const Name = styled.div`
    color: white;
    font-size: 36px;
    font-weight: 600;
    margin-top: 16px;
    text-align: center;
` */

export const Futball = styled.img`
    height: 75%;
    margin: 0;
    z-index: 1;

`


export const RacketImg = styled.img`
    height: 80%;
    margin: 0;
    z-index: 1;
 
   
`

export const BallImg = styled.img`
    height: 20%;
    margin: 0;
    z-index: 1;
    position: relative;
    top: 25%;
    right: 12%;
    animation: 3s rotate infinite;

    

    @keyframes rotate {
        0% { transform: rotate(0);}
        100% { transform: rotate(360deg);}
    }

    

 
   
`

export const InnerDiv = styled.div`
    //border: solid pink;
    height: 60%;
    width: 100%;
    display: flex;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
`




export const OvalContainer2 = styled(OvalContainer)`
    //border: solid yellow;
    margin: 0;
    width: 20%;
    height:10%;
    
`

export const OvalBlue2 = styled(OvalBlue)`
    height: 12px;
    width: 12px;
    margin-right: 5%;
    margin-left: 5.5%;
`

export const OvalWhite2 = styled(OvalWhite)`
    background: white;
    height: 7px;
    width: 7px;
    margin-right: 5%;
    margin-left: 5.5%;
`






export const SportSelection = (props) => {

    const futballHandler = () => {
        props.selectSport('F')
    }

    const tennisHandler = () => {
        props.selectSport('T')
    }

    const pingpongHandler = () => {
        props.selectSport('P')
    }

    return (
        <>
       
        <PageContentPicture>
           
            <TitleHead>Select a sport:</TitleHead>
            <InnerDiv>
          
                <CardsContainers onClick={futballHandler}>
                    <InnerContainer>
                        <Futball src={ball} alt='logo'/>
                    </InnerContainer>
                </CardsContainers>

                <CardsContainers onClick={tennisHandler}>
                    <InnerContainer>
                        <RacketImg src={tennis} alt='logo'/>
                        <BallImg src={tennisBall} alt='logo'/>
                    </InnerContainer>
                </CardsContainers>

                <CardsContainers onClick={pingpongHandler}> 
                    <InnerContainer>
                        <RacketImg src={pingpong} alt='logo'/>
                    </InnerContainer>
                </CardsContainers>


            </InnerDiv>

            <OvalContainer2>
                <OvalBlue2 />
                <OvalWhite2 />
                <OvalWhite2 />
            </OvalContainer2>

        </PageContentPicture>
        </>


    )
}

export default SportSelection