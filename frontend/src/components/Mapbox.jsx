import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css'; 

// modified from: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
mapboxgl.accessToken = 'pk.eyJ1Ijoib2N0by1wdWxwbyIsImEiOiJja3F1cTlqdHgwNDloMm5xaGprZmlqcGd1In0.HXmr8iWuFqpTYTTU3o1DIQ';


const Map = styled.div`
    height: 100%;
    .map-container {
        height: 100%;
    }
`

export default function App(props) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(props.lng ? props.lng : 8.525737538092045); 
    const [lat, setLat] = useState(props.lat ? props.lat : 47.38819351470932);
    const [zoom, setZoom] = useState(12);
    const locationMarker = new mapboxgl.Marker();

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/navigation-night-v1',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });

        locationMarker.setLngLat([lng, lat]).addTo(map.current);


    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        map.current.on('click', (e) => {
            locationMarker.setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map.current);
            });
    });

    return (
        <Map>
            <div ref={mapContainer} className="map-container" />
        </Map>
    );
    }
