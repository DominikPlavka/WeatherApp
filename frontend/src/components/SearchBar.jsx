/* eslint-disable no-unused-expressions */

import './SearchBar.css';
import { useEffect, useState } from 'react';

//require('dotenv').config({path: "../../.env"});

const apiKey = '9139bc6d00ad8fa87da75f7489652eef';

const SearchBar = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
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
        <div>
            <form className='searchbar'>
                <input type="text" className="bar" placeholder="Search location" name="search" />
                <button type="submit" className="submit" onClick={handleClick}>Search</button>
            </form>
            <div className='loading'>
                {isLoading && <p>Loading data</p>}
            </div>
        </div>

    )
}

export default SearchBar;