import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import octo from "../../assets/images/octopus_poly.png";
// import BackgroundImg from '../../assets/images/background8.jpg';
// import BackgroundImg2 from '../../assets/images/background6.jpg';
import OctoWall from './OctoWall';
// import octoLogo from "../../assets/svgs/octo-text-outline_2p.svg";
import { apiUserLogin } from '../../store/actions/userAction';


export const PageContentPicture = styled.div`
    //border: solid red;
    width: 90%;
    height: 100%;
    display: flex;
    
`

export const LeftContainer = styled.div`
    //border: solid blue;
    background: #0a0a0a;
    box-shadow: 3px 44px 21px 1px #00000053;
    border-radius: 17px;
    height: 100%;
    width: 50%; 
    color: white;
` 

/* export const RigthContainer = styled.div`
    height: 100%;
    width: 50%;
    margin-left: 5%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    

    img {
        height: 65%;
        padding-right: 12%;
        animation-duration: 2s;
        animation-iteration-count: infinite;
        margin: 0 auto 0 auto;
        transform-origin: bottom;
        animation-name: bounce;
        animation-timing-function: ease;
        animation-play-state: ${props => props.bounce};
    
        @keyframes bounce {
            0%   { transform: scale(1,1)      translateY(0); }
            10%  { transform: scale(1.1,.9)   translateY(0); }
            30%  { transform: scale(.9,1.1)   translateY(-100px); }
            50%  { transform: scale(1.05,.95) translateY(0); }
            57%  { transform: scale(1,1)      translateY(-7px); }
            64%  { transform: scale(1,1)      translateY(0); }
            100% { transform: scale(1,1)      translateY(0); }
        }
        
    }
`  */

export const LeftTopBar = styled.div `
    //border: solid blue;
    height: 10%;
    padding-top: 6% ;
    padding-right: 2%;
    display: flex;
    padding-left: 5%;
    align-items: flex-end;

`

export const LinkAn = styled.p`
    //border: solid orange;
    text-align: center;
    margin: 15px;
    width: 50%;
    text-decoration: none;
    color: white;
    font-size: 11px;

    a {
        padding-left: 5%;
        text-decoration: none;
        color: #35dbf1;
        font-size: 11px;

    }
    

`


export const LeftMiddleBar = styled.div `
    //border: solid yellow;
    height: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const TitleStyled = styled.h1 `
    //border: solid purple;
    font-size: 300%;
    padding: 10px;
`

export const StyledForm = styled.div`
    //border: solid lightblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

`

export const InputWrapper =styled.div`
    //border: solid pink;
    text-align: center;
    margin-top: 2%; 
    height: 15.5%;
    width: 100%;

`

export const LoginInput =styled.input`
    width: 45%;
    height: 100%;
    outline: none;
    border: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    color: white;
    
    ::placeholder {
        color: white;
        font-size: 80%;
    }
`

export const LeftBottomBar = styled.div `
    //border: solid yellowgreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const BaseButton = styled.button `
    border-radius: 30px;
    width: 25%;
    height: 45px;
    color: white;
    background: none;
    border: solid 3px #19c5db;
    font-size: small;
    transition: width 1s, height 0.2s;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
        width: 36%;
        border: none;
    }

    &:active {
        transform: translateY(4px);
        background: ${props => props.theme.octoGradientBlueColor};
        border: none;
    }
    
`

export const FormContainer = styled.form`
    //border: solid lightseagreen;
    height: 60%;
    margin-top: 32%;
    //border: 1px solid yellow;
    
`



export const Login = () => {
    
    const { push } = useHistory();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        dispatch(apiUserLogin(email, password));
    };

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const onPwdChange = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        if (token) {
            push('/tournaments');
        }
    }, [token, push, dispatch]);



    return (
        <PageContentPicture>
        <LeftContainer>
            <FormContainer onSubmit={onSubmitForm}>
                <LeftMiddleBar>
                    <TitleStyled>Sign In</TitleStyled>
                    <StyledForm>
                        <InputWrapper>
                            <LoginInput type='email' name="email" placeholder='Email' onChange={onEmailChange}/>
                        </InputWrapper>

                        <InputWrapper>
                            <LoginInput type='password' name="password" placeholder='Password' onChange={onPwdChange}/>
                        </InputWrapper>

                        <LinkAn>Don`t have an account? <Link to='/registration' >Sign Up</Link></LinkAn>
                    </StyledForm>
                </LeftMiddleBar>
            
                <LeftBottomBar>
                    <BaseButton  type='submit'>SIGN IN</BaseButton>
                </LeftBottomBar>
            </FormContainer>
        </LeftContainer>
        
        <OctoWall/>
        
        </PageContentPicture>



    )
}

export default Login