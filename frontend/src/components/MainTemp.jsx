import React from "react";

const MainTemp = ({weather: {temp, feels_like}}) => {
    return (
        <div className="temp-data">
            <p className="city">{feels_like} °C</p>
            <p className="temp">Feels like: {feels_like} °C</p>
            <p className="temp"> Temperature: {temp} °C</p>
        </div>
    )
} 

export default MainTemp;