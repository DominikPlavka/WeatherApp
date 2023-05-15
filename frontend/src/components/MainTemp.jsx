import "./MainTemp.css"
import { iconUrl } from "./services/weatherServices"
import { useAuthContext } from "../hooks/useAuthContext"
import { AiOutlineHeart } from "react-icons/ai"
import React, { useState, useEffect } from "react"
import { useCitiesContext } from "../hooks/useCitiesContext"


const MainTemp = ({ weather: { temp, feels_like, name, country, details, icon, speed }, setError, error}) => {

    const { user } = useAuthContext();
    const { cities, dispatch } = useCitiesContext();

    const handleClick = () => {

        if (!user) {
            throw new Error("You must be logged in")
        }

        if (cities.length >= 3) {
            setError('You can add only 3 cities')
            return;
        }

        const data = {
            city: name,
            city_country: country,
        }

        const addFavoriteCity = async () => {
            const response = await fetch('/api/city', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify(data)
            })
            const json = await response.json();

            if (!response.ok) {
                throw new Error(json.error);
            }

            if (user) {
                dispatch({ type: "ADD_CITY", payload: json });
            }

        }
        addFavoriteCity();
    }

    return (
        <div>
            <div className="city">
                <div className="city-data">
                    <img className="icon" alt="icon of weather conditions" src={iconUrl(icon)} />
                    <div className="result">
                        <p>{name}, {country}</p>
                        <button onClick={handleClick} className="favorite" ><AiOutlineHeart /></button>
                    </div>
                    {error && <p>{error}</p>}
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