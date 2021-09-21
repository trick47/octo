import styled from 'styled-components';
import React from 'react';


const ParagraphContainer = styled.div`
  //border: solid red;
  height: auto;
  width: 100%;
  z-index: 1;
  //border: red solid; 
`

const Paragraph = styled.p`
  //border: solid green;
  font-weight: normal;
  font-size: 22px;
  font-family: monospace;
  letter-spacing: .1em;
  color: black; 
  text-align: center;
  padding: 4% 13%;
  padding-bottom: 12%;
  
  //justify-content: center;
  //align-self: center;
  //border: solid red; 
  //margin: 40px;

  b {
    font-weight: bold;
    font-size: 22px;
  }

`


const PageParagraph = (props) => {
  return(
    <ParagraphContainer style={{"margin":props.margin || "10px 0"}}>
      <Paragraph>We are a group of students that developed <b>OCTO</b>, a Tournament Web-based application as our final project of the Full-Stack Bootcamp. <br/> <br/>
       OCTO stands for <b>Organize Create Tournaments Online.</b> <br/>Currently, our app can track three different sports (Football, Tennis, and Ping-Pong.) and two types of format (Round-Robin and Single Elimination).
   <br/> <br/> Our goal is to expand OCTO into tracking all sorts of sports with additional formats.</Paragraph>
    </ParagraphContainer>
  )
}

export default PageParagraph;