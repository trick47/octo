import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { OvalContainer, OvalBlue, OvalWhite  } from './EmailForm';
import checkIcon from '../../../assets/svgs/checked.svg';
import { PageContentPicture} from '..';
import OctoWall from '../OctoWall';
import { LeftContainer, LeftTopBar, LeftMiddleBar, TitleStyled, StyledForm, InputWrapper, LeftBottomBar, BaseButton} from '..';
import { useSelector } from 'react-redux';



const CheckRelative = styled.img`
    //border: solid yellow;
    width: 27%;
    //margin-bottom: 5%;
    animation-name: rotate;
    animation-duration: 0.7s;


    @keyframes rotate {
        0% { transform: rotate(0);}
        100% { transform: rotate(360deg);}
    }

`



const InputWrapper2 = styled(InputWrapper)`
    //border: solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
    margin: 0;
    padding-bottom: 4%;
    /* padding: 0;
    margin-top: 0px;
    margin-bottom: 30px; */
    
`

const ParagraphText = styled.p`
    //border: solid pink;
    height: 10%;
    color: rgb(110, 110, 110);
    text-align: center;
    padding-left: 1%;
    padding-top: 2%;
    
    

`

const LeftTopBar2 = styled(LeftTopBar)` 
    //border: solid blue;
    margin-bottom: 16%;
`

const LeftMiddleBar2 = styled(LeftMiddleBar)` 
    //border: solid green;
    height: 40%;
    padding-bottom: 8%;
`

export const LeftBottomBar2 = styled(LeftBottomBar)` 
    //border: solid red;
    //height: 10%;
    margin-bottom: 19%;
    margin-top: 2% ;
`

const Link2 = styled(Link)`
    //border: solid blue;
    width: 100%;
    text-align: center;
`



const CongratsMessage = () => {

    const signUpMail = useSelector((state) => state.user.userData.email);



    
        
    return (
        <PageContentPicture>

            <LeftContainer>
                
                <LeftTopBar2 />
                
                
                <LeftMiddleBar2>
                    <TitleStyled>Congratulations!</TitleStyled>
                    <StyledForm>
                        <InputWrapper2>
                            <CheckRelative src={ checkIcon } alt='check icon'/>
                        </InputWrapper2>

                        <ParagraphText>We've sent a confirmation code to your email. </ParagraphText>
                        <ParagraphText>{signUpMail}</ParagraphText>

                    </StyledForm>
                </LeftMiddleBar2>

                <LeftBottomBar2>
                    <Link2 to="/verification"><BaseButton>CONTINUE</BaseButton></Link2>
                </LeftBottomBar2>
                

                <OvalContainer>
                    <OvalWhite />
                    <OvalBlue />
                    <OvalWhite />
                </OvalContainer>

            </LeftContainer>

            <OctoWall/>
        </PageContentPicture>

    )
}
 
export default CongratsMessage;