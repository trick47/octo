import styled from 'styled-components';
import React from 'react';

//Style component
/* 
const PageTitleLine = styled.div`
    width: 100px;
    height: 20%;
    background-color: #00ECFF;
`; */

export const PageTitleContainer = styled.div`
    //border: solid blue;
    //border-bottom: 1.5px solid #fff;
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PageTitleText = styled.h1`
    //border: solid pink;
    font-weight: 800;
    font-size: 50px;
    font-family: monospace;
    letter-spacing: .1em;
    //margin-bottom: 30px; 
    //-webkit-text-stroke: 1px ${props => props.theme.octoBlue};
    //text-shadow: 2px 5px 2px rgba(136,238,255,0.57);
`;

//React component

const PageTitle = (props) => {
    return (
        <PageTitleContainer style={{"margin":props.margin || "10px 0"}}>
            <PageTitleText style={{"color": props.color ? props.color : "white"}}>{props.pageTitle}</PageTitleText>
        </PageTitleContainer>
    );
};
export default PageTitle;
