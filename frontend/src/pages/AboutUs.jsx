import styled from "styled-components";
import {Container} from "../pages/ContactUs"
import React from "react";
import PageParagraph from "../styles/section-pragraph";
import octoText from "../assets/svgs/octo-text.svg";
import octo from "../assets/svgs/SliceOcto2.svg";

const ContainerAboutUs = styled(Container) `
  //border: solid yellow;
  display: flex;
  background: white;
  padding-bottom: 10%;
  height: 70%;
`

const OctoTxtImg = styled.img`
  //border: solid blue;
  height: 20%;
  padding-top: 2%;
  margin: 2% 0;
  //border-bottom: 1px solid #00ECFF;
  width: 75%;
  display: flex;
  justify-content: center;
  align-self: center;
`
const OctoImg = styled.img`
  //border: solid pink;
  position: fixed;
  height: 74%;
  top:26%;
  opacity: 0.8;
`

const AboutUs = () => {
  return <>
    <ContainerAboutUs>

      <OctoTxtImg src={octoText} />
      <PageParagraph />

    </ContainerAboutUs>

    <OctoImg src={octo}/>
  </>
}
export default AboutUs

// <PageTitleTxt> About OCTO </PageTitleTxt>
//<OctoImg src={octoPoly}/>