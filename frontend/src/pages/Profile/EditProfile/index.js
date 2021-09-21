import styled from "styled-components";
import {UserProfilePicIcon} from "../ProfileCard";
import icon from '../../../assets/images/faceicon.png'
import {FormContainer, LongInput2 } from "../../CreateTournament/DetailsTournament";
import MovingBackground from "../../../components/MovingBackground";
import {TitleHead3} from "../../CreateTournament/DetailsTournament";
import {LabelText} from "../../Login/SingUp/Verification";
import {BaseButton} from "../../Login";
import { apiUserGetData } from '../../../store/actions/userAction'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from '../../../axios';
import { useHistory } from "react-router-dom";


const Container = styled(FormContainer)`
  //border: solid yellow;
  border-radius: 25px;
  margin-top: 4%;
  min-width: 65%;
  min-height: 73%;
  display: flex;
  background: none;
  box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);

`
const Top = styled.div `
  //border: solid yellow;
  border-radius: 25px;
  //background: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 94%;
  padding: 6% 1%;

  img {
    &:hover {
      opacity: 0.4;
      cursor: pointer;
    }
  }
`
const Title = styled(TitleHead3)`
  //border: solid yellow;
  color: black;
  font-weight: bold;
  width: 50%;
  
  margin-right: 20%;
  margin-bottom: 4%;
  margin-top: 10%;
  font-size: 20px; 
`
const WrapperAvatar = styled.div `
  //border: solid red;
  background: white;
  border-radius: 25px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
    
    /* &:hover {
      img {
        display: inline;
      }
    } 
  
    &:hover ${UserProfilePicIcon}{
      opacity: 0.3;
    }

    img {
      height: 20%;
    }*/
  `
const Wrapper = styled.div`
  //border: solid purple;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  label {
    color: black;
    font-family: monospace;
    margin: 0;
    //margin-left: 36%;
    width: 65%;
  }
`
const ButtonWrapper = styled.div`
  //border: solid green;
  width: 100%;
  text-align: center;
  button {
    color: grey;
    font-weight: bold;
    margin: 5% 0;
    
    
    
    &:hover {
      color: white;
    }
  }
`
const ProfileInput = styled(LongInput2)`
  //border: 1px solid grey;
  height:40px;
  width: 65%; 
  margin: 10px 0;
  background: lightgray;
  color:black;
            
  ::placeholder {
      color: black;
  }
`
/* const Img = styled.img`
  //border: solid grey;
  height: 20%;
  width: 20%; 
  position: absolute;
  margin-top:29px; 
  display:none;    
`*/


const EditProfile = () => {



    const dispatch = useDispatch();
    const history = useHistory();







  const me = useSelector((state) => state.user);
  const [username, setUsername] = useState(me.userData.username);
  const [first_name, setFirst_name] = useState(me.userData.first_name);
  const [last_name, setLast_name] = useState(me.userData.last_name);
  const [email, setEmail] = useState(me.userData.email);
  const [location, setLocation] = useState(me.userData.location);
  const [company, setCompany] = useState(me.userData.company);
  const [profilePictureTemp, setProfilePictureTemp] = useState(null);
  const [preview, setPreview] = useState(null)


  const realFileInput = React.useRef(null);
  const replaceFileInput = (e) => {
      e.preventDefault()
      realFileInput.current.click()
  }

  const handleAvatar = (e) => {
      e.preventDefault()
      setProfilePictureTemp(e.target.files[0]);
      if (e.target.files[0]) setPreview(URL.createObjectURL(e.target.files[0]))
  }



  const editProfileAction = (profileData) => {
    const url = 'user/me/';
    const auth = 'Bearer ' + localStorage.getItem('userToken');
    const headers = {
      headers: { Authorization: auth, 'Content-Type': 'multipart/form-data' },
    };

    Axios.patch(url, profileData, headers)
      .then((response) => {
        console.log('Edit Profile successful.', response);
        history.push(`/user/${me.userData.id}`)
      })
      .catch((error) => {
        console.log('Edit Profile failed', error.response);
      });
  };

  const setData = (data) => {
    setUsername(data.username);
    setFirst_name(data.first_name);
    setLast_name(data.last_name);
    setEmail(data.email);
    setLocation(data.location);
    setCompany(data.company);
  };

  useEffect(() => {
    dispatch(apiUserGetData(localStorage.getItem('userToken')));
  }, [dispatch]);

  useEffect(() => {
    setData(me.userData);
  }, [me]);

  const edithProfileButtonHandler = (event) => {
    event.preventDefault();
    const profileData = new FormData();
    profileData.append('username', username);
    profileData.append('first_name', first_name);
    profileData.append('last_name', last_name);
    profileData.append('email', email);
    profileData.append('location', location);
    profileData.append('company', company);
    if (profilePictureTemp) profileData.append('avatar', profilePictureTemp);
    editProfileAction(profileData);
  };

    return (
    <>
        <MovingBackground/>
             <Container>
                <Top>
                 
                 <UserProfilePicIcon src = { preview ? preview : icon } alt="avatar" onClick={replaceFileInput}/>
                 <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
                </Top>

               <WrapperAvatar>
               <Title>Edit your Profile</Title>
               <Wrapper>
                 <LabelText>Username</LabelText>
                 <ProfileInput defaultValue={me.userData.username}
                    onChange={(event) => setUsername(event.target.value)}
                    type="text" />
               </Wrapper>
               <Wrapper>
                 <LabelText>First name</LabelText>
                 <ProfileInput defaultValue={me.userData.first_name}
                    onChange={(event) => setFirst_name(event.target.value)}
                    type="text" />
               </Wrapper>
               <Wrapper>
                 <LabelText>Last name</LabelText>
                 <ProfileInput 
                  defaultValue={me.userData.last_name}
                  onChange={(event) => setLast_name(event.target.value)}
                  type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Company</LabelText>
                 <ProfileInput 
                  defaultValue={me.userData.company}
                  onChange={(event) => setCompany(event.target.value)}
                  type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Location</LabelText>
                 <ProfileInput 
                 defaultValue={me.userData.location}
                 onChange={(event) => setLocation(event.target.value)}
                 type="text"/>
               </Wrapper>
               <Wrapper>
                 <LabelText>Email</LabelText>
                 <ProfileInput 
                  defaultValue={me.userData.email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="text"/>
               </Wrapper>
               <ButtonWrapper>
                 <BaseButton onClick={edithProfileButtonHandler} type="submit">Save Changes</BaseButton>
               </ButtonWrapper>
               </WrapperAvatar>

            </Container>
    </>
    )
};
export default EditProfile