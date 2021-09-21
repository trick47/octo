import styled from 'styled-components';
import React from 'react';


export const PageContentPicture = styled.div`
    /* 
    border: none;
    font-family: "Archivo Black", sans-serif;
    background: #14d1d1;
    display: flex;
    flex-direction: column;
    height: 100%; 
    width: 100%; 
    justify-content: center;
    align-items: center;
    color: #14d1d1;
    font-size: 0;
    line-height: 1.5;

    :nth-child(2) {
        animation-delay: 0.5s; 
    }

    :nth-child(3) {
        animation-delay: 1s;
    }

    :nth-child(4) {
        animation-delay: 1.5s;
    }

    :nth-child(5) {
        animation-delay: 2s;
    }

    :nth-child(6) {
        animation-delay: 2.5s;
    }

    :nth-child(7) {
        animation-delay: 3s;
    }

    span {
        font-size: 5rem;
        display: inline-block;
        animation: move 3s ease-in-out infinite;

        @keyframes move {
            0% {
                transform: translate(-30%, 0);
            }
            50% {
                text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);
            }
            100% {
                transform: translate(30%, 0);
            }
        }

        :nth-child(2) {
            animation-delay: 0.5s;
        }

        :nth-child(3) {
            animation-delay: 1s;
        }

        :nth-child(4) {
            animation-delay: 1.5s;
        }

        :nth-child(5) {
            animation-delay: 2s;
        }

        :nth-child(6) {
            animation-delay: 2.5s;
        }

        :nth-child(7) {
            animation-delay: 3s;
        }
    }


    <div>
                <span>R</span>
                <span>E</span>
                <span>D</span>
                <span>Y</span>
            </div>

            <div>
                <span>F</span>
                <span>O</span>
                <span>R</span>

                <span>T</span>
                <span>H</span>
                <span>E</span>
            </div>

            <div>
                <span>C</span>
                <span>H</span>
                <span>A</span>
                <span>L</span>
                <span>L</span>
                <span>E</span>
                <span>N</span>
                <span>G</span>
                <span>E</span>
                <span>?</span>
            </div>
     */

    margin: 0;
    //border: solid yellow;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 0;
    min-height: 99%;
    min-width: 100%;
    left: 0;
    overflow: hidden;
    background-color: #000;
    padding-bottom: 5%;

    p {
        //position: relative;
        font-family: sans-serif;
        text-transform: uppercase;
        font-size: 2em;
        letter-spacing: 4px;
        overflow: hidden;
        background: linear-gradient(90deg, #000, #fff, #000);
        background-repeat: no-repeat;
        background-size: 80%;
        animation: animate 3s linear infinite;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: rgba(255, 255, 255, 0);


  
        @keyframes animate {
            0% { background-position: -500%; }
            100% { background-position: 500%; }
        }
    }
    
`



export const Message = () => {

    return (
        <PageContentPicture>

            <p>READY FOR THE CHALLENGE?</p>
            
        </PageContentPicture>



    )
}

export default Message