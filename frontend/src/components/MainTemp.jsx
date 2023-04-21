import "./MainTemp.css"
import { iconUrl } from "./services/weatherServices"
import React from "react"

const MainTemp = ({ weather: { temp, feels_like, name, country, details, icon, speed } }) => {

    return (
        <div>
            <div className="city">
                <div className="city-data">
                    <img className="icon" alt="icon of weather conditions" src={iconUrl(icon)} />
                    <p>{name}, {country}</p>
                </div>
            </div>
            <div className="temp-data">
            <p className="temp">{temp} °C</p>
            <div className="right-temp">
                <p className="temp-add detail">{details}</p>
                <p className="temp-add">Feels like: {feels_like}°C</p>
                <p className="temp-add">Wind: {speed} m/s</p>
            </div>
            </div>
        </div>
    )
}

export default MainTemp;