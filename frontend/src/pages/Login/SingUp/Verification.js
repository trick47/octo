import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {  OvalBlue, OvalWhite, OvalContainer } from './EmailForm';
import { useHistory } from 'react-router-dom';
import { PageContentPicture} from '..';
import OctoWall from '../OctoWall';
//import { TitleStyled2, LeftBottomBar2} from './CongratsDiv';
import { LeftBottomBar, TitleStyled, LeftContainer, LeftTopBar, LeftMiddleBar, StyledForm, InputWrapper, LoginInput, BaseButton} from '..';
import { useDispatch } from 'react-redux';
import { apiUserVerify } from '../../../store/actions/userAction';


const LeftTopBar2 = styled(LeftTopBar)` 
    //border: solid red;
    margin-bottom: 8%;
    
`

export const LongInput = styled(LoginInput)`
    //border: solid yellow;
    width: 83.7%;
    height: 30px;
    font-size: ${props => props.theme.textSizeM}; ;
    margin: 0;
    margin-bottom: 2%;
    
`

export const InputsDiv = styled.div`
    //border: solid orange;
    width: 100%;
    height: 100%;
    padding: 0 8%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 5%;
    
`

export const ShortInput = styled(LoginInput)`
    //border: solid blue;
    width: 100%;
    height: 30px;
`

export const InputWrapper2 = styled(InputWrapper)`
    //border: solid purple;
    margin: 3% 0;
    display: flex;
    flex-direction: column;
    width: 48%;
`

export const LabelText = styled.label`
    //border: solid yellow;
    display: flex;
    width: 100%;
    color: white; ;
    font-size: 13px;
    margin-bottom: 5%;
    padding-left: 3%;
`
export const LabelText2 = styled(LabelText)`
    //border: solid yellow;
    width: 87%;
    margin-bottom: 1%;
`

export const OvalContainer2 = styled(OvalContainer)`
    //border: solid red;
    margin-top: 21%;

`


const VerificationForm = () => {

    const [code, setValidationCode] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password_repeat, setPasswordRepeat] = useState('');
    const { push } = useHistory();
    const dispatch = useDispatch();


    const completeButtonHandler = (event) => {
        event.preventDefault();
        dispatch(apiUserVerify(
            email,
            username,
            code,
            password,
            password_repeat,
        ));
        push('/login');
    };
    
    
    return (

        <PageContentPicture>
            <LeftContainer>
                <LeftTopBar2 />
                <form onSubmit={completeButtonHandler}>
                    <LeftMiddleBar>
                        <TitleStyled>Verification</TitleStyled>

                    <StyledForm>
                        <LabelText2> Validation code</LabelText2>
                        <InputWrapper>
                            
                            <LongInput value={code} onChange={(event) => setValidationCode(event.target.value)} type="text" />
                        </InputWrapper>
                        <InputsDiv> 
                            <InputWrapper2>
                                <LabelText> Email</LabelText>
                                <ShortInput  value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Username</LabelText>
                                <ShortInput  value={username} onChange={(event) => setUserName(event.target.value)}type="text" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password</LabelText>
                                <ShortInput  value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
                            </InputWrapper2>
                            <InputWrapper2>
                                <LabelText> Password Confirmation</LabelText>
                                <ShortInput  value={password_repeat || ''} onChange={(event) => setPasswordRepeat(event.target.value)} type="password" />
                            </InputWrapper2>
                        </InputsDiv>
                    </StyledForm>
                    </LeftMiddleBar>

                    <LeftBottomBar>
                        <BaseButton type="submit">COMPLETE</BaseButton>
                    </LeftBottomBar>
                </form>

                <OvalContainer2>
                    <OvalWhite />
                    <OvalWhite />
                    <OvalBlue />
                </OvalContainer2>

            </LeftContainer>
            <OctoWall/>
        </PageContentPicture>


    )
    
}

export default connect()(VerificationForm)