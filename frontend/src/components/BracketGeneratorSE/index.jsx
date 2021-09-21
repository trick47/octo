import Match from "../Match";
import styled from "styled-components";
import {useEffect, useState} from "react";
import Axios from "../../axios";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.rounds}, 300px);
  margin-bottom: 5%;
  margin-left: 5%;
  justify-content: center;
`

const RoundWrapper = styled.div`
    //border: solid yellow;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  :last-child {
    .thing {
      display: none;
    }
  }
`

const MatchWrapper = styled.div`
    //border: solid red;
  min-height: 90px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  :nth-child(odd) {
    .thing {
      align-items: flex-end;
    }

    .left {
      border-top: 1px white solid;
      border-right: 1px white solid;
    }

    .right {
      border-bottom: 1px white solid;
    }
  }

  :nth-child(even) {
    .left {
      border-bottom: 1px white solid;
      border-right: 1px white solid;
    }
  }
`
const Path = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
`

const Left = styled.div`
  height: 50%;
  width: 50%;
`

const Right = styled.div`
  height: 50%;
  width: 50%;
`

const Round = (props) => {
    return (
        <RoundWrapper>
            {
                props.matches.map((item, index) => {
                    return (
                        <MatchWrapper key={`${item}-${index}`}>
                            {
                                item.players.length > 0 || item.mock_players.length > 0
                                    ?
                                    <>
                                        <Match match={item} tournament_status={props.tournament_status}/>
                                        <Path className={"thing"}>
                                            <Left className={"left"}/>
                                            <Right className={"right"}/>
                                        </Path>
                                    </>
                                    :
                                    <></>
                            }
                        </MatchWrapper>
                    )
                })
            }
        </RoundWrapper>
    )
}

const BracketGeneratorSE = (props) => {

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
    }, [props.tournament_id,]);

    return (
        <>
            {
                bracket
                    ?
                    <Wrapper rounds={bracket.rounds.length}>
                        {bracket.rounds.map((item, index) => <Round
                            key={`${item}-${index}`}
                            matches={item.matches}
                            tournament_status={props.tournament_status}/>)
                        }
                    </Wrapper>
                    :
                    null
            }
        </>

    )
}

export default BracketGeneratorSE