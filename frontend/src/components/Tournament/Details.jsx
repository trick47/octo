import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    margin: 0 auto;
    background-color: black;
    opacity: 90%; 
    border-radius: 4px;
    box-shadow: 1px 1px 20px -5px #14d1d1;
    padding: 20px;

    width: 80%;
    display: flex;
    justify-content: center;

    ; 
`;


const Details = (props) => {
    return <>
        <Container>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </Container>
    </>
}

export default Details
