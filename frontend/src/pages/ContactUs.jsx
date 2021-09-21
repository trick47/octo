import styled from "styled-components";
//import {FormContainer, MapImg, PinImg} from "./CreateTournament/DetailsTournament";
import {PageTitleContainer, PageTitleText} from "../styles/page-title";
import { SectionTitleText} from "../styles/section-title";
import letter from "../assets/svgs/letter1.svg";
import PA from "../assets/images/propulsion1.png";
import React from "react";

//import map from '../assets/svgs/map.svg';
//import bluepin from '../assets/svgs/map2.svg';



export const Container = styled.div`
  //border: red solid;
  width: 100%;
  height: 100%;
  margin-left: 6%;
  //margin-top: 1%;
  //margin-bottom: 0;
  background: black;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: solid 4px #19c5db;
  box-shadow: 0px 20px 35px -16px rgba(125, 249, 255, 0.4);
`


export const Wrapper = styled.div`
  //border: solid orange;
  display: flex; 
  align-items:center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 3%;

  img {
    height: 30%;
    width: 100%;
    margin-bottom: 10%;
  }

  h1 {
    font-size: 10px;
  }
`

export const InfoBox = styled.div`
    //border: solid green;
    display: flex;
    align-items: flex-end;
    height:69%;
    width: 70%;
    
`
export const PageTitleTxt = styled(PageTitleText)`
  //border: solid yellow;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-weight: normal;
  height: 27%;
  width: 75%;
  padding-bottom: 2%;
  border-bottom: 1px solid white;

  
`

export const SectionTitleBig = styled(SectionTitleText)`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 3%;
`

export const SectionTitle2 = styled.p`
  //border: solid yellow;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  color: white;
  
`

/* export const MapImg = styled.img`
    border: solid lightblue;
    height: 300%;
    position: relative;
    bottom: 435%;

`

export const PinImg = styled.img`
    border: solid lightblue;
    height: 300%;
    z-index: 1;
    position: relative;
    bottom: 132%;
    cursor: pointer;

    &:hover {

        animation: bounce 1s infinite alternate;
        -webkit-animation: bounce 1s infinite alternate;

        @keyframes bounce {
            from { transform: translateY(0px); }
            to { transform: translateY(-15px);  }
        }

        @-webkit-keyframes bounce {
            from { transform: translateY(0px);}
            to { transform: translateY(-15px);}
        }
    }

` */

/* export const PAImg = styled.img`
    //border: solid green;
    
    position: absolute;
    bottom: 25.5%;
    
    
` */


const ContactUs = () => {
 
  return (
  
  <>
    <Container>
    
    
      <PageTitleTxt> Contact Us</PageTitleTxt>
      
      <InfoBox>

        <Wrapper>
          <img src={PA} alt=""/>
          <SectionTitleBig>Advisor</SectionTitleBig>
          <SectionTitle2>Heinrichstrasse 200,<br/> 8005 Zürich</SectionTitle2>
        </Wrapper>
    
        <Wrapper>
          <img src={letter} alt=""/>
          <SectionTitleBig>EMAIL</SectionTitleBig>
          <SectionTitle2 >octo.tournament@gmail.com</SectionTitle2>
        </Wrapper>
      </InfoBox>

  
  </Container>
</>
)
}

export default ContactUs

