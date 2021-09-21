import styled from 'styled-components';
import React from 'react';




export const InnerBackground1 = styled.div`
    width: 100%;
    z-index: 0;
    overflow: hidden;
    background-color: black;
    padding-top:13%;
    position: absolute;
    min-height: 92.4%;
    min-width: 99%;
    
`

export const InnerBackground2 = styled.div`
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: [start] 1fr [left-gutter] (86.6px) [left-gutter] 1fr [end];
    grid-template-columns: [start] 1fr [left-gutter] repeat(16,86.6px) [left-gutter] 1fr [end];
    -ms-grid-rows: [top] 1fr [top-gutter] (64px) [bottom-gutter] 1fr [bottom];
    grid-template-rows: [top] 1fr [top-gutter] repeat(8,64px) [bottom-gutter] 1fr [bottom];
    justify-content: center;
    margin: 0;
    transform: rotate(-12deg) skew(-12deg);

`

export const InnerBackground3 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: top / start / 8 / end;
`

export const InnerBackground4 = styled.div`
    box-sizing: border-box;
    background: none;
    flex-grow: 1;
`

export const InnerBackground5 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 4 / 2 / auto / 5;
`

export const InnerBackground6 = styled.div`
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px #e3e8ee;
    flex-grow: 1;
    animation: animationLeftRight 3s ease-in-out infinite;
    animation: animationLeftRight 3s ease-in-out infinite;

@keyframes animationLeftRight {
    0% { transform: translateX(0px);}
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
} 
`

export const InnerBackground7 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 6 / start / auto / 2;
`

export const InnerBackground8 = styled.div`
    box-sizing: border-box;
    background-color: #212d63;
    flex-grow: 1;
`

export const InnerBackground9 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 7 / start / auto / 4;
`

export const InnerBackground10 = styled.div`
    box-sizing: border-box;
    background-color: #19c5db;
    flex-grow: 1;
    animation: animationLeftRight 3s ease-in-out infinite;

@keyframes animationLeftRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
} 

`

export const InnerBackground11 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 8 / 4 / auto / 6;
`

export const InnerBackground12 = styled.div`
    box-sizing: border-box;
    background-color: #e3e8ee;
    animation: animationLeftRight 3s ease-in-out infinite;
    animation: animationLeftRight 3s ease-in-out infinite;

@keyframes animationLeftRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
} 
`

export const InnerBackground13 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 2 / 15 / auto / end;
`

export const InnerBackground14 = styled.div`
    box-sizing: border-box;
    background-color: #7fd3ed;
    flex-grow: 1;
    animation: animationRightLeft 3s ease-in-out infinite;
    animation: animationLeftRight 4s ease-in-out infinite;

@keyframes animationRightLeft {
    0% { transform: translateX(0px); }
    50% { transform: translateX(-1000px);}
    100% { transform: translateX(0px); }
} 

@keyframes animationLeftRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
} 
`

export const InnerBackground15 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 3 / 14 / auto / end;
`

export const InnerBackground16 = styled.div`
    box-sizing: border-box;
    background-color: #F0F8FF;
    flex-grow: 1;
    animation: animationRightLeft 3s ease-in-out infinite;

@keyframes animationRightLeft {
    0% { transform: translateX(0px); }
    50% { transform: translateX(-1000px);}
    100% { transform: translateX(0px); }
} 

`

export const InnerBackground17 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 4 / 17 / auto / 20;
`

export const InnerBackground18 = styled.div`
    box-sizing: border-box;
    background-color: #e3e8ee;
    flex-grow: 1;
    animation: animationRightLeft 3s ease-in-out infinite;
    animation: animationLeftRight 4s ease-in-out infinite;

@keyframes animationRightLeft {
    0% { transform: translateX(0px); }
    50% { transform: translateX(-1000px);}
    100% { transform: translateX(0px); }
} 

@keyframes animationLeftRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
} 
`

export const InnerBackground19 = styled.div`
    box-sizing: border-box;
    display:flex;
    grid-area: 5 / 14 / auto / 17;
`

export const InnerBackground20 = styled.div`
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px #e3e8ee;
    flex-grow: 1;
    animation: animationRightLeft 3s ease-in-out infinite;
    animation: animationLeftRight 3s ease-in-out infinite;

@keyframes animationRightLeft {
    0% { transform: translateX(0px); }
    50% { transform: translateX(-1000px);}
    100% { transform: translateX(0px); }
}

@keyframes animationLeftRight {
    0% { transform: translateX(0px); }
    50% { transform: translateX(1000px);}
    100% { transform: translateX(0px); }
}
`


export const MovingBackground = () => {


    return (
    
    
        <InnerBackground1>
            <InnerBackground2>
                <InnerBackground3>
                    <InnerBackground4/>
                </InnerBackground3>
                <InnerBackground5>
                    <InnerBackground6/>
                </InnerBackground5>
                <InnerBackground7>
                    <InnerBackground8/>
                </InnerBackground7>
                <InnerBackground9>
                    <InnerBackground10/>
                </InnerBackground9>
                <InnerBackground11>
                    <InnerBackground12/>
                </InnerBackground11>
                <InnerBackground13>
                    <InnerBackground14/>
                </InnerBackground13>
                <InnerBackground15>
                    <InnerBackground16/>
                </InnerBackground15>
                <InnerBackground17>
                    <InnerBackground18/>
                </InnerBackground17>
                <InnerBackground19>
                    <InnerBackground20/>
                </InnerBackground19>
            </InnerBackground2>
        </InnerBackground1>



      )
}

export default MovingBackground