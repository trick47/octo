import React from 'react';
import styled from "styled-components";
import { defaultUserProfileBanner } from "../../../constants";

const Banner = styled.div `
    background-image: url(${({ background }) => background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items:center; 
    height: 300px;
    width: 100%; 
`

const ProfileBanner = ({ banner, children }) => {
    const backgroundBanner = banner || defaultUserProfileBanner;

    return <>
        <Banner background={backgroundBanner}>
            {children}
        </Banner>
    </>
};

export default ProfileBanner
