import styled from 'styled-components';
import React from 'react';
import { TitleHead2  } from './PrivateOr';
import defaultAvatar from '../../assets/svgs/shark.svg'
import { LeftMiddleBar, LeftBottomBar, BaseButton, InputWrapper, StyledForm} from '../Login/index';
import { InputWrapper2, InputsDiv, LongInput, ShortInput, LabelText} from '../Login/SingUp/Verification';
import MovingBackground from '../../components/MovingBackground';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Axios from '../../axios';
import { useDispatch, useSelector} from 'react-redux';
import { apiUserGetData } from '../../store/actions/userAction';



/* export const PageContentPicture3 = styled(PageContentPicture2)`
border-left: none;
color: #1a1f36;
box-sizing: border-box;
min-height: 100%;
width: 100%;
overflow: hidden;
flex-grow: 1;
` */

export const FormContainer = styled.div`
    position: absolute;
    margin: 4%;
    z-index: 1; 
    background: rgba(0, 0, 0, 1);
    border-radius: 25px;
    color: white;
    height: 72%;
    width: 70%;
    //border: 1px solid white;
    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    
`

export const TitleHead3 = styled(TitleHead2)`
    //border: solid blue;
    margin: 0;
    width: min-content;
    font-size: 17px;
    margin: 1.5%;
`


export const InputWrapper4 = styled(InputWrapper2)`
    //border: solid blue;
    height: 20%;
    padding: 0;
    margin: 0;
    position:relative; // check this

    
`
export const LongInput2 = styled(LongInput)`
    // border: solid pink;
    height: 80%;
    margin-top: 1%;

    
`
export const ShortInput2 = styled(ShortInput)`
    // border: solid orange;
    height: 45%;
    padding: 0 5%;
`


export const InputsDiv2 = styled(InputsDiv)`
    //border: solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    height: 100%;
`

export const StyledForm2 = styled(StyledForm)`
    //border: solid green;
    width: 80%;
    height: 75%;
    padding: 0;
    margin-top: 2%;
    color: white;
`

export const InputWrapper3 = styled(InputWrapper)`
    //border: solid blue;
    padding: 0;
    margin: 0;
    height: 12%;
    margin-bottom: 15%;
    margin-top: 5%;
    
`

export const LeftMiddleBar2 = styled(LeftMiddleBar)`
    //border: solid purple;
    height: 100%;
    
`

export const LeftBottomBar2 = styled(LeftBottomBar)`
    // border: solid lightblue;
    height: 10%;
    margin-top: 2%;

`

export const SelectTorunament = styled.select`
    width: 100%;
    height: 47%;
    outline: none;
    border: none;
    padding-left: 30px;
    background: #ffffff75;
    border-radius: 30px;
    appearance: none;
    
    option {
        padding-right: 40%;
    }
`


export const CameraImg = styled.img`
    height: 50%;
    position: absolute;
    top: 10%;
    margin-left: 20%;
  
    &:hover {
        animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both ;
        transform: translate3d(0, 0, 0);

        @keyframes shake { 
            10%, 90% { transform: translate3d(-1px, 0, 0);}
            20%, 80% { transform: translate3d(2px, 0, 0); }
            30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
            40%, 60% {  transform: translate3d(4px, 0, 0); } 
        }
    }

    &:active {
        transform: translateY(4px);
    }

`

export const IconImg = styled.img`
    //border: solid yellow;
    position: absolute;
    align-self: center;
    justify-self: center;
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    border-radius: 50%; 
    cursor: pointer;   

    &:hover {
        opacity: 30%
    }
`

export const InputWrapper5 = styled(InputWrapper2)`
    height: 20%;
    padding: 0;
    margin: 0;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;

`

export const MapLink = styled.div`
    position: relative;
    bottom: 0;
    // border: 1px solid white;
    
`


export const DetailsCreate = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userIsLoggedIn = useSelector((state) => state.user.token ? state.user.token : localStorage.userToken); // prevent log-out by page refresh


    useEffect(() => {
        setSport(props.sport)
        setPrivacy(props.privacy)
    }, [])



    const [sport, setSport] = useState(null)
    const [privacy, setPrivacy] = useState(null)
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [preview, setPreview] = useState(null)
    const [players, setPlayers] = useState(null)
    const [format, setFormat] = useState('SE')
   const [location, setLocation] = useState('Somewhere in the Sea.')
    //const [lat, setLat] = useState(47.3769)
   // const [lng, setlng] = useState(8.5417)
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)
    const [description, setDescription] = useState('false')


    const realFileInput = React.useRef(null);
    const replaceFileInput = (e) => {
        e.preventDefault()
        realFileInput.current.click()
    }

    const handleAvatar = (e) => {
        e.preventDefault()
        setAvatar(e.target.files[0])
        if (e.target.files[0]) setPreview(URL.createObjectURL(e.target.files[0]))
    }

    const createHandler  = () => {

        const tournamentData = new FormData();
        tournamentData.append('sport', sport)
        tournamentData.append('private', privacy)
        tournamentData.append('name', name)
        if (avatar) tournamentData.append('picture', avatar);
        tournamentData.append('no_of_players', players)
        tournamentData.append('format', format)
        tournamentData.append('location', location)
        //tournamentData.append('latitude', lat)
        //tournamentData.append('longitude', lng)
        tournamentData.append('start_date', start)
        tournamentData.append('end_date', end)
        tournamentData.append('description', description)

        const url = 'tournament/new/';
        const auth = 'Bearer ' + localStorage.getItem('userToken');
        const headers = {
            headers: { Authorization: auth, 'Content-Type': 'multipart/form-data' },
        };
        Axios.post(url, tournamentData, headers)
            .then((response) => {
                console.log('Tournament Creation successful.');
                console.log(response);
                history.push(`/tournament/${response.data.id}/admin`);
                dispatch(apiUserGetData(userIsLoggedIn))
    })
            .catch((error) => {
                console.log('Tournament Creation error', error.response.data);
            });
    };

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const playersHandler = (e) => {
        console.log(e.target.value)
        setPlayers(e.target.value)
    }

    const formatHandler = (e) => {
        console.log(e.target)
        setFormat(e.target.value)
    }

    const startDateHandler = (e) => {
        setStart(e.target.value)
    }

    const endDateHandler = (e) => {
        setEnd(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const locationnHandler = (e) => {
        setLocation(e.target.value)
    }

    return (
    
    <>
        
        <MovingBackground/>

        <FormContainer>

            <LeftMiddleBar2>
                <TitleHead2>Complete Tournament Details:</TitleHead2>
            <StyledForm2>

                <InputsDiv2> 
                    <InputWrapper4>
                        <LabelText> Tournament Name</LabelText>
                        <ShortInput2 onChange={nameHandler} type="text" />
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Avatar</LabelText>
                        <input type="file" style={{display: "none"}} ref={realFileInput} onChange={e => handleAvatar(e)} accept="image/png, image/jpeg" multiple/>
                        <IconImg onClick={replaceFileInput} src={preview ? preview : defaultAvatar} alt='avatar'/>
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Amount of Players</LabelText>
                        <ShortInput2 onChange={playersHandler} type="number" />
                    </InputWrapper4>
                    <InputWrapper4>

                        <LabelText> Type of Tournament </LabelText>

                        <SelectTorunament onChange={formatHandler} name="Tournament">
                            <option value="SE">Single Elimination</option>
                            <option value="RR">Round Robin</option>
                            <option value="MX">Groups + Elimination</option>
                        </SelectTorunament>

                        
                    </InputWrapper4>

                    <InputWrapper4>
                        <LabelText>Start</LabelText>
                        <ShortInput2 onChange={startDateHandler}  type="datetime-local" />
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText> Description</LabelText>
                        <ShortInput2 onChange={descriptionHandler} type="text" />
                    </InputWrapper4>
                    <InputWrapper4>
                        <LabelText>End</LabelText>
                        <ShortInput2 onChange={endDateHandler}  type="datetime-local" />
                    </InputWrapper4> 


                <InputWrapper4>


                <LabelText> Location</LabelText>
                <ShortInput2 onChange={locationnHandler} type="text" />

                </InputWrapper4>

                </InputsDiv2>

            </StyledForm2>
            </LeftMiddleBar2>

            <LeftBottomBar2>
                <BaseButton type="submit" onClick={createHandler}>COMPLETE</BaseButton>
            </LeftBottomBar2>

        </FormContainer>

        
            
    </>

        




    )
}

export default DetailsCreate