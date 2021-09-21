import {useState} from "react";
import PageTitle from "../../styles/page-title";
import Participant from "../Tournament/Participant";
import Modal from "react-modal";
import styled from "styled-components";
import {BaseButton} from "../../pages/Login";
import Axios from "../../axios";
// import calendar_icon from "../../assets/svgs/calendar.svg"

const ScoreWrapper = styled.div`
  border-radius: 30px;
  overflow: hidden;
  height: 70vh;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  //close button div
  .close {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  //match content div
  .result {
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    //h1 {
    //  text-align: center;
    //  width: 80%;
    //  letter-spacing: 0.1em;
    //  color: black;
    //  border-bottom: 1px solid black;
    //  padding-bottom: 3%;
    //  //padding-right: 15%;
    //}
    //
    /*.date_time {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      color: black;
      padding: 0 2%;

      p {
        font-weight: bold;
        margin-right: 2%;
      }

      button {
        height: 40px;
        width: 40px;
        background: none;
        border: none;
        outline: none;
        display: flex;
        transform: perspective(100px) translateZ(0px);
        transition: transform 100ms linear;

        :hover {
          cursor: pointer;
          transform: perspective(100px) translateZ(20px);
        }

        :active {
          transform: translateY(2px);
        }

      }
    }*/


    .wrapper_score {
      height: 50%;
      width: 100%;
      margin: 0 2%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .draw_on {
        writing-mode: vertical-rl;
        letter-spacing: 10px;
        text-orientation: upright;
        color: black;
        font-weight: 700;
        font-size: 30px;
        margin: 5% 4% 0 4%;
        text-shadow: -3px 2px 8px #707070;
      }

      .draw_off {
        display: none;
      }

      .points {
        height: 80%;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 4% 2% 0 2%;
        background: ${props => props.theme.mediumGrey60};
        //border-right: solid 4px #19c5db;
        border-radius: 30px;
        color: black;


        :hover {
          cursor: text;
        }
      }

      .winner {
        background: ${props => props.theme.octoLightBlue};
      }

      .loser {
        background: ${props => props.theme.accentColorLight};
        opacity: 0.5;
      }

      input {
        height: 100%;
        width: 100%;
        outline: none;
        border: none;
        background: none;
        font-size: 100px;
        font-weight: 700;
        text-align: center;
        color: ${props => props.theme.backgroundLigthNavy};
      }
    }
  }
`

const Player = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  div:nth-child(2) {
    //border: 1px solid red;
    box-shadow: 0 0 49px 1px rgba(0,0,0,0.47);
    height: 50%;
    width: 50%;
  }
  

  h1 {
    color: black;
    font-weight: 700;
    font-size: 50px;
    opacity: 0;
    //margin-bottom: 2%;
  }

  .on {
    opacity: 1;
  }

  .off {
    opacity: 0;
  }
`

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgba(194,192,192,0.95)";
Modal.defaultStyles.content.border = "none";
Modal.defaultStyles.content.padding = "none";

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  color: black;
  font-size: 20px;
  margin-right: 2%;
  margin-top: 2%;
  transform: perspective(100px) translateZ(0px);
  transition: transform 100ms linear;

  :hover {
    cursor: pointer;
    transform: perspective(100px) translateZ(20px);
  }

  :active {
    transform: translateY(2px);
  }
`

const SubmitButton = styled(BaseButton)`
  margin-top: 4%;
  font-weight: 700;
  font-size: 24px;
  color: black;

  &:hover {
    color: white;
  }
`

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 3%;
  margin-bottom: 2%;
  
  .title {
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    padding: 0 3%;

    .vs {
      width: 10%;
      justify-content: center;
      margin: 0 5%;
    }

    .first_player {
      justify-content: flex-end;
    }

    h1 {
      width: 42%;
      font-weight: 800;
      font-size: 50px;
      font-family: monospace;
      letter-spacing: .1em;
      color: black;
      display: flex;
      align-items: center;
      white-space: nowrap;
    } 
  }


`

const MatchModal = (props) => {

    const [value1, setValue1] = useState(props.match.result[0]);
    const [value2, setValue2] = useState(props.match.result[1]);

    const changeValue1 = (e) => {
        if (parseInt(e.target.value)) {
            console.log(e.target.value)
            setValue1(parseInt(e.target.value));
        } else if (e.target.value === "") {
            setValue1(0);
        } else {
            console.log(e.target.value)
            e.preventDefault();
        }
    }

    const changeValue2 = (e) => {
        if (parseInt(e.target.value)) {
            console.log(e.target.value)
            setValue2(parseInt(e.target.value));
        } else if (e.target.value === "") {
            setValue2(0);
        } else {
            console.log(e.target.value)
            e.preventDefault()
        }
    }

    const closeModal = () => {
        setValue1(props.match.result[0]);
        setValue2(props.match.result[1]);
        props.closeModal();
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            borderRadius: '30px',
        },
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        async function patchMatch() {
            const url = `match/${props.match.id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('userToken')}`},

            };
            const body = {
                result: [value1, value2],
                status: "ED"
            }
            try {
                const resp = await Axios.patch(url, body, config);
                if (resp.status === 200) {
                    closeModal();
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        patchMatch()
    }

    return (
        <Modal
            isOpen={props.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Match"
        >
            {
                props.tournament_status === "On going" && props.match.players.length > 1
                    ?
                    <ScoreWrapper>
                        <div className={"close"}>
                            <CloseButton onClick={closeModal}>X</CloseButton>
                        </div>
                        <form className={"result"} onSubmit={onSubmitHandler}>
                            <Title>
                                <div className={"title"}>
                                    <h1 className={"first_player"}>{`${props.match.players[0].first_name} ${props.match.players[0].last_name[0]}.`}</h1>
                                    <h1 className={"vs"}>VS</h1>
                                    <h1 className={"second_player"}>{`${props.match.players[1].first_name} ${props.match.players[1].last_name[0]}.`}</h1>
                                </div>
                            </Title>
                            {/*<div className={"date_time"}>*/}
                            {/*    <p>time</p>*/}
                            {/*    <button type={"button"}><img src={calendar_icon} alt={"calendar_icon"}/></button>*/}
                            {/*</div>*/}
                            <div className={"wrapper_score"}>
                                <Player>
                                    <h1 className={value1 > value2 ? "on" : "off"}>WINNER</h1>
                                    <Participant id={props.match.players[0].id}/>
                                </Player>
                                <label className={value1 === value2 ? "points" : value1 > value2 ? "points winner" : "points loser"}>
                                    <input type={"text"} placeholder={0} value={value1} onChange={changeValue1}
                                           disabled={props.match.status === "ED"}/>
                                </label>
                                <p className={value1 === value2 ? "draw_on" : "draw_off"}>DRAW</p>
                                <label className={value1 === value2 ? "points" : value1 < value2 ? "points winner" : "points loser"}>
                                    <input type={"text"} placeholder={0} value={value2} onChange={changeValue2}
                                           disabled={props.match.status === "ED"}/>
                                </label>
                                <Player>
                                    <h1 className={value1 < value2 ? "on" : "off"}>WINNER</h1>
                                    <Participant id={props.match.players[1].id}/>
                                </Player>
                            </div>
                            {/*<textarea/>*/}
                            <SubmitButton type={"submit"} style={{"display": props.match.status === "ED" ? "none" : "block"}}>SAVE</SubmitButton>
                        </form>
                    </ScoreWrapper>
                    :
                    <ScoreWrapper>
                        <PageTitle pageTitle={"This match can't be updated yet!"} margin={"none"} color={"black"} />
                    </ScoreWrapper>
            }
        </Modal>
    )
}

export default MatchModal

{/* <div className={"date_time"}>
  <p>time</p>
  <button type={"button"}><img src={calendar_icon} alt={"calendar_icon"}/></button>
</div> */
}