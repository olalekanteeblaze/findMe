import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
import './App.css';

function App() {

  const [state, setState] = useState({
      center: {
        lat: 59.955413,
        lng: 30.337844
      },
      zoom: 11,
      lat: 59.955413,
      lng: 30.337844
  })
  const getLocation = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showMap)
    }
  }
  const showMap = (position) => {
    console.log(position)
    setState({
        ...state,
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        lat: position.coords.latitude,
        lng: position.coords.longitude
    })
  }
  const customDistanceToMouse = (pt, mousePos, markerProps) => {
    // console.log(pt)
    // const K_SCALE_NORMAL = 0.65;
  
    // const K_MARKER_HEIGHT = 60;
    // const K_MARKER_WEIGHT_PT = K_MARKER_HEIGHT * 0.7;


    // const scale = markerProps.scale;
    // const x = pt.x;
    // const y = pt.y - K_MARKER_WEIGHT_PT * scale;
  
    // const scaleNormalized = Math.min(scale / K_SCALE_NORMAL, 1);
    // const K_MIN_DIST_MIN_KOEF = 0.6;
  
    // const distKoef = 1 + scaleNormalized * (K_MIN_DIST_MIN_KOEF - 1);
    return 20;
  }
  return (
    <div className="App">
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC9N0J4zEBO5ep0HYiM6d8g0uVG15cIyog",
                              language: 'en',
                              region: 'ng' }}
          center={state.center}
          defaultZoom={state.zoom}
          distanceToMouse={customDistanceToMouse}
          hoverDistance={30}
        >
          <Pin
            lat={state.lat}
            lng={state.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      <button onClick={getLocation} className="btn btn-primary mt-3">Find Me</button>
    </div>
  );
}

export default App;
