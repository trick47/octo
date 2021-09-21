import Participant from "../Tournament/Participant";
import styled from "styled-components";
import octo_victory from "../../assets/svgs/octo-victory-transparent.svg"

const Wrapper = styled.div`
  //border: solid yellow;
  height: 70%;
  width: 100%;
  display: flex;
  padding: 0 10%;
  align-items: center;

  .place {
    margin: 1% 0;
    font-size: 28px;
  }

  .style_status {
    //border: solid yellow;
    font-size: 45px;
    text-align: center;
    font-weight: bold;
  }

  div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div:first-child {
      height: 80px;
      width: 100%;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      * {
        margin: 0;
      }

      img {
        height: 100%;
        margin-right: 5%;
      }

      p {
        margin-right: 5%;
      }
    }
  }
`

const Left = styled.div`
  //border: solid yellowgreen;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 2% 0;

  p {
    //border: solid red;
    font-family: monospace;
    padding-top: 2%;
    padding-bottom: 3%;
    padding-left: 3%
  }
`

const Right = styled.div`
  //border: solid red;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  perspective: 600px;

  img {
    height: 70%;
    animation: introduceLabel 2s cubic-bezier(0.19, 1, 0.22, 1) 1s 1 both,
    rotateLabel 5s linear 3s infinite;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    @keyframes introduceLabel {
      0% {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.4) rotateY(-1800deg);
      }
      100% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1) rotateY(20deg);
      }
    }

    @keyframes rotateLabel {
      0% {
        transform: translate(-50%, -50%) rotateY(20deg);
      }
      50% {
        transform: translate(-50%, -50%) rotateY(-20deg);
      }
      100% {
        transform: translate(-50%, -50%) rotateY(20deg);
      }
    }

  }
`

const StandingGeneratorSE = (props) => {
    return (
        <Wrapper>
            <Left>
                {
                    props.tournament_status === "Finished"
                        ?
                        <>
                            <p className={"place"}>First place</p>
                            <Participant id={1}/>
                            <p className={"place"}>Second place</p>
                            <Participant id={2}/>
                            <p className={"place"}>Third place</p>
                            <Participant id={3}/>
                        </>
                        :
                        <p className={"place"} className={"style_status"}>The Tournament is still ongoing!</p>
                }
            </Left>
            <Right>
                <img src={octo_victory} alt={"octo victory"}/>
            </Right>
        </Wrapper>
    )
}

export default StandingGeneratorSE