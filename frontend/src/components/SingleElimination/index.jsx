import BracketGeneratorSE from "../BracketGeneratorSE";
import {useLocation} from "react-router-dom";
import StandingGeneratorSE from "../StandingGeneratorSE";


const SingleElimination = (props) => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <StandingGeneratorSE tournament_id={props.tournament_id} tournament_status={props.tournament_status}/>
                :
                <BracketGeneratorSE tournament_id={props.tournament_id} tournament_status={props.tournament_status}/>
            }
        </>
    )
}

export default SingleElimination