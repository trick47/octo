import BracketGeneratorRR from "../BracketGeneratorRR";
import {useLocation} from "react-router-dom";
import StandingGeneratorRR from "../StandingGeneratorRR";

const RoundRobin = (props) => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === `/tournament/${props.tournament_id}/standing`
                ?
                <StandingGeneratorRR tournament_id={props.tournament_id} tournament_status={props.tournament_status}/>
                :
                <BracketGeneratorRR tournament_id={props.tournament_id} tournament_status={props.tournament_status}/>
            }
        </>
    )
}

export default RoundRobin