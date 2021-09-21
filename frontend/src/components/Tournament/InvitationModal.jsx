import {useState} from "react";
import PageTitle from "../../styles/page-title";
import Modal from "react-modal";
import styled from "styled-components";
import {BaseButton} from "../../pages/Login";
import Axios from '../../axios';


const Wrapper = styled.div`
  //border: solid yellow;
  height: 70vh;
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3%;


  //close button div
  .close {
    height: 10%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .result {
    //border: solid red;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    h1 {
      color: black;
      border-bottom: 1px solid black;
      padding-bottom: 3%;
      padding-right: 15%;
    }

  }

  button {
    color: black;
    font-weight: bold;
    font-size: 16px;

    &:hover {
      color: white;
    }
  }
`

const EditButton = styled(BaseButton)`
  margin: 20px;
  font-weight: 500;
  font-size: 15px;
  align-self: center;
  
` 


const Mails = styled.ul`
  //border: solid green;
  width: 70%;
  padding: 0 3%;
  color: white;
  overflow: auto;
  max-height: 30vh;
  margin: 2% 0;
  list-style-type: none; 


  div {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  input {
    border-radius: 20px;
    background: none;
    max-width: max-content;
    margin: 20px;
    //padding: 3px;
    color: black;
    border: solid 3px  ${props => props.borderColor};
    text-align: center;
    font-size: 20px;
    outline: none;

  }
  
  li {
    border-radius: 20px;
    max-width: max-content;
    background: none;
    padding: 10px;
    margin: 20px;
    margin-left: 5%;
    color: grey;
    //border: solid 3px #19c5db;
    text-align: center;
    font-size: 20px;
  }

  button {
    color: grey;
    font-weight: bold;
    //margin-right: 5%;

    &:hover {
      color: white;
    }
  }



`


const PageTitle2 = styled.h1`
  font-weight: 800;
  font-size: 50px;
  font-family: monospace;
  letter-spacing: .1em;
  color: black;
  border-bottom: 1px solid black;
  padding-bottom: 3%;
  padding-right: 15%;
  
` 


Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(145, 145, 145, 0.6)";
Modal.defaultStyles.content.border = "none";
Modal.defaultStyles.content.padding = "none";

const CloseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  color: black;
  font-size: 20px;
  margin-right: 2%;
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


const InvitationModal = (props) => {

    const [mails, setMails] = useState([]);
    const [mail, setMail] = useState("");
    const [border, setBorder] = useState("#19c5db");
    const [placeholder, setPlaceholder] = useState("Email");

    const re = /\S+@\S+\.\S+/;


    const addmail = (e) => {

      if (re.test(mail)) {
        const newmail = {
          id: new Date().getTime(),
          text: mail,
          status: 'open',
        };
        setMails([...mails].concat(newmail));
        setMail("");
      } else {
        setMail("");
        setPlaceholder("Invalid Email");
        setBorder("red");

      } 

    }
  
    const deletemail = (id) => {
      let updatedmails = [...mails].filter((mail) => mail.id !== id);
      setMails(updatedmails);
    }


    const closeModal = () => {
        setBorder("#19c5db");
        setPlaceholder("Email");
        setMail("");
        sendMails();

        props.closeModal();
    }

    const sendMails = () => {
      mails.forEach(email => {
        sendInvitation(email.text)
      });
    }



    const sendInvitation = (email) => {
      const url = `invitation/tournament/${props.id}/`;
      const auth = 'Bearer ' + localStorage.userToken;
      const headers = { headers: { Authorization: auth } };
      const profileData = new FormData();
      profileData.append('email', email);
  
      Axios.post(url, profileData, headers)
          .then((response) => {
          console.log('send invitation');
      })
      .catch((error) => {
          console.log('sendInvitation Error', error.response.data);
      });
  };

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
            padding: '2%',
        },
    };
    

    return (
        <Modal 
            isOpen={props.modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Invitation"
        >  
          <Wrapper>
            <div className={"close"}>
                <CloseButton onClick={closeModal}>X</CloseButton>
            </div>
            <div className={"result"}>
              <PageTitle2> Invitations </PageTitle2>
              <Mails borderColor={border}>
                <div>  
                  <input
                    type="Email"
                    onChange={(e) => {
                      if (re.test(mail)) {
                        setBorder("#19c5db");
                        setPlaceholder("Email");
                      } 
                      setMail(e.target.value)}
                    }
                    value={mail}
                    placeholder={placeholder}
                  />
                <EditButton onClick={addmail}>ADD</EditButton>
                </div>
              </Mails>
              <Mails>
                {mails.map((mail) => (
                  <div>
                    <li>{mail.text}</li>
                    <EditButton onClick={() => deletemail(mail.id)}>Delete</EditButton>
                  </div>
                ))}
              </Mails>
            </div>
            <BaseButton onClick={closeModal} type='submit'>SEND</BaseButton>
          </Wrapper>
        </Modal>
    )
}

export default InvitationModal