import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory  } from 'react-router-dom';
import { connect } from 'react-redux';
import { PageContentPicture} from '..';
import OctoWall from '../OctoWall';
import { FormContainer, LeftContainer, LinkAn, LeftMiddleBar, TitleStyled, StyledForm, InputWrapper, LoginInput, LeftBottomBar, BaseButton} from '..';
import { apiUserSignUp } from '../../../store/actions/userAction';
import { useDispatch } from 'react-redux';



export const OvalContainer = styled.div`
    //border: solid lightseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6%;
    //margin-top: 15.2%;

    
`

export const OvalBlue = styled.div`
    background: #19c5db;
    height: 10px;
    width: 10px;
    border-radius: 30px;
    margin-right: 1%;
    margin-left: 1.5%;
`

export const OvalWhite= styled.div`
    border: solid white;
    height: 6px;
    width: 6px;
    border-radius: 30px;
    margin-right: 1%;
    margin-left: 1.5%;
`



const EmailSignUp = (props) => {

    const [email, setEmail] = useState('');
    const { push } = useHistory();
    const dispatch = useDispatch();


   /*  const Continuing = (event) => {
        e.preventDefault();
        registerButtonHandler(event)
    } */


    const registerButtonHandler = (event) => {
        event.preventDefault();
        // registerUser({ email: email });
        dispatch(apiUserSignUp(email));
        // maybe check server response first
        push('/confirmation');

    };
    
    
    return (
        <PageContentPicture>

            <LeftContainer>
             
                <FormContainer onSubmit={registerButtonHandler}>

                    <LeftMiddleBar>
                        <TitleStyled>Sign Up</TitleStyled>
                        <StyledForm>
                            <InputWrapper>
                            
                                <LoginInput onChange={(event) => setEmail(event.target.value)} type='email' placeholder='Email'/>
                            </InputWrapper>
                            <LinkAn>Already have an account? <Link to='/login' >Sign In</Link></LinkAn>
                        </StyledForm>
            
                    </LeftMiddleBar>
                    
                    <LeftBottomBar>
                        <BaseButton type='submit'>CONTINUE</BaseButton>
                    </LeftBottomBar>
                    
                </FormContainer>

                <OvalContainer>
                    <OvalBlue />
                    <OvalWhite />
                    <OvalWhite />
                </OvalContainer>

            </LeftContainer>

            <OctoWall/>

        </PageContentPicture>

    )
    
}

export default connect()(EmailSignUp)