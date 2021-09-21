import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
//import * as Zurich from "./zurich-data.json";
import axios from "axios";
//Whit this the icon pin can change of color dependig on the user


export const FormContainer = styled.form`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
    background: white;
    border: none;
    border-radius: 5px;
    box-shadow: 2px 5px 15px 5px rgba(0,0,0,0.26);

    label {
        width: max-content;
        color: black;
        font-size: 13px;
        margin: 3px 0;

        textarea {
            border: none;
            outline:none;
            border-bottom: 1px solid gray;

            &:active {
                outline:none;
                border-bottom: ${props => props.theme.octoGradientBlueColor};
            }
        }

    }

    
`

export const InputSection = styled.input`
    border: none;
    border-bottom: 1px solid gray;
    outline: none;

    ::placeholder {
        font-size: 12px;
        color: rgb(185, 184, 184);
    }

    &:active {
        
        border-bottom: ${props => props.theme.octoGradientBlueColor};
    }
    
`

export const SubmitButton = styled.button`
    border: none;
    padding: 2%;
    border-radius: 5px;
    color: white;
    background-color: black;
    cursor: pointer;

    &:active {
        transform: translateY(4px);
        background: ${props => props.theme.octoGradientBlueColor};
        border: none;
    }
    
`




const Map = () => {

    const [pins, setPins] = useState([]);

    
    
    const [currentUsername] = useState("tina");
    const [newPlace, setNewPlace] = useState(null)
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [viewport, setViewport] = useState({
        latitude: 47.3769,
        longitude: 8.5417,
        width: "80vw",
        height: "80vh",
        zoom: 10,
        //pitch: 50,
    });
    
    useEffect(() => {
        const getPins = async () => {
        try {
            const allPins = await axios.get("/http://localhost:3000/test");
            setPins(allPins.data);
        } catch (err) {
            console.log(err);
        }
        };
        getPins();
    }, []);


    const handleAddClick = (e) => {
        console.log(e);
        const [longitude, latitude] = e.lngLat;
        setNewPlace({
          lat: latitude,
          long: longitude,
        });
    };
    
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPin = {
          username: currentUsername,
          title,
          desc,
          lat: newPlace.lat,
          long: newPlace.long,
        };
    
        try {
            const res = await axios.post("URLMISSING", newPin);
            setPins([...pins, res.data]);
            setNewPlace(null);
          } catch (err) {
            console.log(err);
          }
    };

    return (

        <>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoidGluaXRhcyIsImEiOiJja3I1M2JoNmEzMThhMnpxYXNoMnJ4c3dzIn0.IzaW7j4EZTLatjnW08yKww"}
            mapStyle="mapbox://styles/tinitas/ckr52wuv30mj617micsxaecuz"
            onViewportChange={viewport => { setViewport(viewport); }}
            onDblClick={currentUsername && handleAddClick}>
            
                {pins.map((p) => (
                <>
                    <Marker latitude={p.l} longitude={p.long} offsetLeft={-3.5 * viewport.zoom} 
                    offsetTop={-7 * viewport.zoom}>
{/*                         <Room style={{
                            fontSize: 7 * viewport.zoom,
                            color: currentUsername === p.username ? "black" : "grey"}}
                            /> */}
                    </Marker>

                    

                {newPlace && (
                    <Popup
                        latitude={newPlace.lat}
                        longitude={newPlace.long}
                        closeButton={true}
                        closeOnClick={false}
                        onClose={() => setNewPlace(null)}
                        anchor="left">

                        <FormContainer onSubmit={handleSubmit}>
                            <label>Title</label>
                                <InputSection placeholder="Enter a title" 
                                autoFocus onChange={(e) => setTitle(e.target.value)}/>
                            
                            <label>Description</label>
                                <textarea placeholder="Say us something about your tournament."
                                onChange={(e) => setDesc(e.target.value)}/>
                            
                            
                            <SubmitButton type="submit" > Add Pin </SubmitButton>
                        </FormContainer>
                    </Popup>

                )}</>

                ))}
        </ReactMapGL>
    
            

	


        </>
    )
}


export default Map