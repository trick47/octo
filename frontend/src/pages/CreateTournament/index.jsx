import React from "react";
import { useState } from 'react';
import SportSelection from './SelectSport'
import PrivateOrPublic from './PrivateOr'
import DetailsCreate from './DetailsTournament'


const CreateTournament = () => {

    const [step, setStep] = useState(1)
    const [sport, setSport] = useState('')
    const [privacy, setsPrivacy] = useState(false)


    const selectSport = (sport) => {
        setSport(sport);
        setStep(2);
    }

    const selectPrivacy = (privacy) => {
        setsPrivacy(privacy);
        setStep(3);
    }


    switch(step) {

        case 1:  return <SportSelection selectSport={selectSport}/>;
        case 2:  return <PrivateOrPublic selectPrivacy={selectPrivacy}/>;
        case 3: return <DetailsCreate sport={sport} privacy={privacy}/>;

        default: return <SportSelection/>;
    }
}

export default CreateTournament
