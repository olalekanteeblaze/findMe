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
  return (
    <div className="App">
      <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC9N0J4zEBO5ep0HYiM6d8g0uVG15cIyog",
                              language: 'en',
                              region: 'ng' }}
          center={state.center}
          defaultZoom={state.zoom}
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
