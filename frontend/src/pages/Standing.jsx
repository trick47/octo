import SingleElimination from "../components/SingleElimination";
import RoundRobin from "../components/RoundRobin";
import styled from "styled-components";
import Header from './TournamentHeader'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTournamentByID} from "../store/actions/tournamentAction";

const Wrapper = styled.div`
  height: fit-content;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const Standing = () => {

    const dispatch = useDispatch();
    const url = window.location.pathname;
    const url_array = url.split("/");
    const tournament_id = url_array[url_array.length - 2];
    const tournament = useSelector((state) => state.tournament);

    useEffect(() => {
        dispatch(getTournamentByID(tournament_id));
    }, [tournament_id, dispatch])

    // conditional rendering depending on tournament format
    const format = tournament.format

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
                    <SingleElimination tournament_id={tournament_id}/>
                    :
                    format === "Round robin"
                    ?
                    <RoundRobin tournament_id={tournament_id}/>
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

export default Standing