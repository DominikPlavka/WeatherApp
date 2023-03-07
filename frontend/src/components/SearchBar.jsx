/* eslint-disable no-unused-expressions */

import './SearchBar.css';
import { WiDayLightWind } from "react-icons/wi";
import { useEffect, useState } from 'react';

//require('dotenv').config({path: "../../.env"});

const apiKey = '9139bc6d00ad8fa87da75f7489652eef';

const SearchBar = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    useEffect (()=> {
        console.log(weatherData);
    }, [weatherData]);

    const handleClick = async (e) => {
        setIsLoading(true);
        e.preventDefault();

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`)
            if (response.ok) {
                let result = await response.json();
                setWeatherData(result);
            } else {
                throw new Error('Request failed');
            }
        } catch {
            (err) => {
                console.log(err.message)
            }
        } finally {
            setIsLoading(false);
        }
    };
   
    return (
        <header>
            <div className="search-container">
                <form>
                    <input type="text" placeholder="Search..." name="search" />
                    <button type="submit" className="submit" onClick={handleClick}>< WiDayLightWind /></button>
                </form>
                {isLoading && <h2>Loading...</h2>}
            </div>
        </header>
    )
}

export default SearchBar;