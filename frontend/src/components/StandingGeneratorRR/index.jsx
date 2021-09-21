import styled from "styled-components";
import {useEffect, useState} from "react";
import Axios from "../../axios";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  margin: 0.3% 0;
  background-color: black;
  opacity: 90%;
  border-radius: 4px;
  padding: 15px;
  width: 80%;
  display: flex;
  box-shadow: ${props => props.theme.boxShadowOcto};

  p {
    white-space: nowrap;
    height: 100%;
    width: 10%;
    display: flex;
    justify-content: center;
    overflow: hidden;

    :first-child {
      width: 3%;
      justify-content: center;
    }

    :nth-child(2) {
      width: 17%;
      display: inline-block;
      justify-content: flex-start;
      text-overflow: ellipsis;
    }
  }

  :first-child {
    p:nth-child(2) {
      margin-left: 3%;
      width: 14%;
    }
  }
`


const Player = (props) => {
    return (
        <Container>
            <p>{props.index + 1}.</p>
            <p>{props.player.user ? props.player.user.first_name : props.player.mock_user.first_name} {
                props.player.user ? props.player.user.last_name : props.player.mock_user.last_name}</p>
            <p>{props.player.matches_played}</p>
            <p>{props.player.wins}</p>
            <p>{props.player.draws}</p>
            <p>{props.player.loses}</p>
            <p>{props.player.score_for}</p>
            <p>{props.player.score_against}</p>
            <p>{props.player.score_diff}</p>
            <p>{props.player.points}</p>
        </Container>
    )
}

const StandingGeneratorRR = (props) => {

    const [standing, setStanding] = useState(null);

    useEffect(() => {
        async function fetchStanding() {
            const url = `tournament/${props.tournament_id}/standing/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('userToken')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setStanding(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchStanding()
    }, [props.tournament_id]);


    return (
        <Wrapper>
            <Container>
                <p>No.</p>
                <p>Player name</p>
                <p>Matches played</p>
                <p>Wins</p>
                <p>Draws</p>
                <p>Loses</p>
                <p>Score for</p>
                <p>Score against</p>
                <p>Score diff...</p>
                <p>Points</p>
            </Container>
            {standing && standing.map((item, index) => <Player key={`${item}-${index}`} index={index} player={item}/>)}
        </Wrapper>
    )
}

export default StandingGeneratorRR