import styled from 'styled-components';


export const BaseButton = styled.button `
    border-radius: 30px;
    width: 10px;
    height: 90px;
    color: #ecebeb;
    background: linear-gradient(90deg, rgba(0,142,210,1) 1%, rgba(33,246,255,0.9192051820728291) 100%);
    border: solid 4px #14d1d1;
    font-size: large;
    margin-top: 100px;
    border: none;


    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translateY(4px);
    }
    
`


