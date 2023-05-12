import "./MainTemp.css"
import { iconUrl } from "./services/weatherServices"
import { useAuthContext } from "../hooks/useAuthContext"
import { AiOutlineHeart } from "react-icons/ai"
import React from "react"
import { useCitiesContext } from "../hooks/useCitiesContext"



const MainTemp = ({ weather: { temp, feels_like, name, country, details, icon, speed } }) => {
    
    const { user } = useAuthContext();
    const { dispatch } = useCitiesContext();

    const handleClick = () => {

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
                throw new Error (json.error);
            }

            dispatch({ type: "ADD_CITY", payload: json})
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
                        <button onClick={ handleClick } className="favorite" ><AiOutlineHeart /></button>
                    </div>
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