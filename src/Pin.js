import React, { useState } from 'react';
import PinImage from './pin-in-the-map.png';

const unhoveredStyle = {
    display: 'none'
}
const hoverStyles = {
    display: 'block'
}
const Pin = (props) => {
    const [hovered, setHovered] = useState(false)
    const toggleCard = () => {
        setHovered(!hovered)
    }
    return(
        <div className="pin">
            <div className="card text-white bg-primary mb-3" style={hovered ? hoverStyles : unhoveredStyle}>
                <div className="card-body">
                    <h5 className="card-title">Coordinates</h5>
                    <p className="card-text">Latitude: {props.lat}</p>
                    <p className="card-text">Longitude: {props.lng}</p>
                </div>
            </div>
            <img src={PinImage} alt="map pin" onMouseOver={toggleCard} onMouseOut={toggleCard}/>
        </div>
    )
}
export default Pin