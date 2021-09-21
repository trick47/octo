import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import avatar from "../../assets/svgs/diverfaceblack.svg"
import { useHistory } from "react-router-dom";
import Axios from '../../axios';

const Container = styled.div`
    //border: solid pink;
    margin: 0;
    background-color: black;
    opacity: 90%; 
    border-radius: 15px;
    padding: 1%;
    width: 80%;
    height: 95%;
    display: flex;
    justify-content: center;
    // box-shadow: ${props => props.theme.boxShadowOcto};


    box-shadow: 3px 11px 21px 35px rgba(33,33,33,0.44);
    cursor: pointer;

    &:hover {
        cursor: pointer;
        background: ${props => props.theme.octoGradientBlueColor};
    }
`;

const CardLeft = styled.div`
    padding: 2%;
    //border: solid blue;
    grid-area: left;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
`;

const UserProfilePicIcon = styled.img`
    height: 78px;
    width: 78px;
    margin-bottom: 0.5rem;
    border-radius: 40px;
`;

const Name = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    //margin-bottom: 0.5rem;
    color: white; 
`;

const Location = styled.p`
    font-weight: 300px;
    font-size: 0.85rem;
    color: white; 
`;


const Participant = (props) => {

    const [participant, setParticipant] = useState(null)

    const history = useHistory();
    const handleClick = () => {
        history.push(`/user/${props.id}`);
    }

    const userByID = (id) => {
        // prepare data
        const url = `/user/${id}/`;
        const auth = 'Bearer ' + localStorage.userToken;
        const headers = { headers: { Authorization: auth } };
        Axios.get(url, headers)
            .then((response) => {
                setParticipant(response.data);
            })
            .catch((error) => {
                console.log('userByID Error', error.response.data);
            });
        };

    useEffect(() => {
        userByID(props.id);
    }, [props.id])

    return <>
        {
        participant ?
        <Container onClick={handleClick}>
            <CardLeft>
                <UserProfilePicIcon src={ participant.avatar  ?  participant.avatar : avatar } />  
                <Name>{participant.username}</Name>
                <Location>{participant.location}</Location>
            </CardLeft>
        </Container>
        : null 
        }       
    </>

}

export default Participant
