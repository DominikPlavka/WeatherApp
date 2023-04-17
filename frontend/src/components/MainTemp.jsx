import "./MainTemp.css"
import { iconUrl } from "./services/weatherServices"
import React from "react"

const MainTemp = ({ weather: { temp, feels_like, name, country, details, icon, speed } }) => {
    
    return (
        <div className="temp-data">
            <p className="city"><img className="icon" alt="Icon of weather conditions" src={iconUrl(icon)}></img>{name}, {country}</p>
            <p className="temp">{temp} °C</p>
            <div className="right-temp">
                <p className="temp-add detail">{details}</p>
                <p className="temp-add">Feels like: {feels_like} °C</p>
                <p className="temp-add">Wind: {speed} km/h</p>
            </div>
        </div>
    )
}

export default MainTemp;