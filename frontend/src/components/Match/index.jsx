import styled from "styled-components";
import avatar from "../../assets/svgs/shark.svg";
import {useEffect, useState} from "react";
import MatchModal from "../MatchModal";
import Axios from "../../axios";

const Wrapper = styled.div`
  height: 70px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  box-shadow: ${props => props.theme.boxShadowDarkRight};
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;
  font-weight: bold;


  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(10px);
  }

  .name {
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    white-space: nowrap;

    p {
      text-overflow: ellipsis;
      overflow: hidden;
    }

    img {
      height: 20px;
      border-radius: 50%;
      margin: 0 10px;
    }
  }

  .points {
    height: 100%;
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.backgroundLigthNavy};

    p {
      font-weight: ${props => props.theme.textWeightBold};
    }
  }
`

const Player1 = styled.div`
  height: 35px;
  width: 100%;
  background: ${props => props.theme.backgroundLigthNavy};
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;

  .winner {
    background: ${props => props.theme.octoGreen};
    border-radius: 0 5px 0 0;
  }

  .loser {
    background: ${props => props.theme.accentColorLight};
    border-radius: 0 5px 0 0;
    opacity: 0.5;
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 5px 0 0;
    opacity: 0.5;
  }
`

const Player2 = styled.div`
  height: 35px;
  width: 100%;
  background: ${props => props.theme.backgroundLigthNavy};
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .winner {
    background: ${props => props.theme.octoLightBlue};
    border-radius: 0 0 5px 0;
  }

  .loser {
    background: ${props => props.theme.accentColorLight};
    border-radius: 0 0 5px 0;
    opacity: 0.5;
  }

  .normal {
    background: ${props => props.theme.mediumGrey60};
    border-radius: 0 0 5px 0;
    opacity: 0.5;
  }
`

const Match = (props) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);

    const closeModal = () => setIsOpen(false);

    const [match, setMatch] = useState(null);
    useEffect(() => {
        async function fetchMatch() {
            const url = `match/${props.match.id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('userToken')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setMatch(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchMatch()
    }, [props.match.id, modalIsOpen]);

    return (
        <>
            {
                match &&
                <>
                    <Wrapper onClick={openModal}>
                        <Player1>
                            <div className={"name"}>
                                <img src={avatar} alt={"user"}/>
                                <p>{match.players.length > 0 ? match.players[0].first_name : match.mock_players[0].first_name} {
                                    match.players.length > 0 ? match.players[0].last_name : match.mock_players[0].last_name}</p>
                            </div>
                            <div className={"points loser"}>
                                <p>{match.result[0]}</p>
                            </div>
                        </Player1>
                        <Player2>
                            <div className={"name"}>
                                <img src={avatar} alt={"user"}/>
                                <p>{match.players.length > 0 ? match.players[1].first_name : match.mock_players[1].first_name} {
                                    match.players.length > 0 ? match.players[1].last_name : match.mock_players[1].last_name}</p>
                            </div>
                            <div className={"points winner"}>
                                <p>{match.result[1]}</p>
                            </div>
                        </Player2>
                    </Wrapper>
                    <MatchModal match={match}
                                tournament_status={props.tournament_status}
                                modalIsOpen={modalIsOpen}
                                openModal={openModal}
                                closeModal={closeModal}/>
                </>
            }

        </>
    )
}

export default Match