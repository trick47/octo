import ProfileCard from "./ProfileCard";
import CurrentTournament from "./CurrentTournament";
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Axios from '../../axios';


const PublicProfile = () => {

    const [user, setUser] = useState({});

    // get user id from URL

    const url = window.location.pathname;
    const url_array = url.split("/");
    const user_id = url_array[url_array.length - 1];
    const loggedInUser = useSelector(state => state.user.userData)
    const [myProfile, setMyProfile] = useState(false)


    const getUserByID = (id) => {
        // prepare data
        const url = `/user/${id}/`;      
        Axios.get(url)
        .then((response) => {
            console.log('User data retrieved by id');
            setUser(response.data)
        })
        .catch((error) => {
            console.log('getUserByID', error.response.data);
        });
    };

    useEffect(() => {
        getUserByID(user_id);
    }, [user_id])

    useEffect(() => {
        if(user.id === loggedInUser.id) {
            setMyProfile(true);
        } 
    }, [user, loggedInUser])

        return(
            <>
                {user.id ? 
                    <>
                    <ProfileCard user = {user} edit = {myProfile}/>
                    <CurrentTournament user = {user} showPrivate={myProfile}/>
                    </>
                    : 
                    null
                }
            </>)
    };

export default PublicProfile