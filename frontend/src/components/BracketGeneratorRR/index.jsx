import styled from "styled-components";
import Match from "../Match";
import {useEffect, useState} from "react";
import Axios from "../../axios";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const RoundWrapper = styled.div`
  height: fit-content;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;

  h1 {
    font-size: 20px;
    font-weight: 500;
  }
`

const Round = (props) => {
    return (
        <RoundWrapper>
            <h1>Round {parseInt(props.index) + 1}</h1>
            {
                props.matches.map((item, index) => <Match key={`${item}-${index}`} match={item} tournament_status={props.tournament_status}/>)
            }
        </RoundWrapper>
    )
}

const BracketGeneratorRR = (props) => {

    const [bracket, setBracket] = useState(null);

    useEffect(() => {
        async function fetchBracket() {
            const url = `tournament/${props.tournament_id}/bracket/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('userToken')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setBracket(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchBracket()
    }, [props.tournament_id]);

    return (
        <Wrapper>
            {bracket && bracket.rounds.map((item, index) => <Round key={`${item}-${index}`}
                                                                   index={index}
                                                                   matches={item.matches}
                                                                   tournament_status={props.tournament_status}/>)}
        </Wrapper>
    )
}

export default BracketGeneratorRR