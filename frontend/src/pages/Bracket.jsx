import styled from "styled-components";
import SingleElimination from "../components/SingleElimination";
import RoundRobin from "../components/RoundRobin";
import Header from './TournamentHeader'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTournamentByID} from "../store/actions/tournamentAction";


const Wrapper = styled.div`
    //border: solid orange;
    height: fit-content;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Bracket = () => {

    const dispatch = useDispatch();
    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];


    useEffect(() => {
        dispatch(getTournamentByID(tournament_id));
    }, [tournament_id, dispatch])


    const tournament = useSelector((state) => state.tournament);
    // conditional rendering depending on tournament format
    const format = tournament.format

    console.log(tournament)

    return (
        <Wrapper>
            {
                tournament
                ?
                <>
                    <Header name={tournament.name}/>
                    {
                    format === 'Single elimination'
                    ?
                    <SingleElimination tournament_id={tournament_id} tournament_status={tournament.status}/>
                    :
                    format === "Round robin"
                    ?
                    <RoundRobin tournament_id={tournament_id} tournament_status={tournament.status}/>
                    :
                    null
                    }
                </>
                :
                null
            }
        </Wrapper>
    )

    // else mixed

}

export default Bracket