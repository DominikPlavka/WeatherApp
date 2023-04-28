import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import Note from '../components/Note'
import getFormattedWeatherData from '../components/services/weatherServices'
import MainTemp from '../components/MainTemp'
import Forecast from '../components/Forecast'
import { useEffect, useState } from 'react'
import TopCity from '../components/TopCity'
import AdditionalInfo from '../components/AdditionalInfo'
import "./Home.css"

const Home = () => {

    const [query, setQuery] = useState({ q: "Spisska Nova Ves" });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);
    const [conditions, setConditions] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({ ...query, units })
                .then((data) => {
                    setWeather(data);
                    setConditions(data.details);
                });
        }
        fetchWeather();
    }, [query, units]);

    const [cities, setCities] = useState(null);

    /////////////////// TEMP DATA FOR CITIES - FETCH ALL DATA

    useEffect (() => {
        const getCities = async () => {
            const response = await fetch ('/api/city');
            
            const data = await response.json();

            if (!response.ok) {
                throw new Error ('There was a problem to fetch data');
            }
            
            setCities(data);
        }
        getCities()
    }, [])

    //////////////////

    return (
        <div className='container'>
            <div className='search-container'>
                <div className='top-cities'>
                {cities &&
                    cities.map((cityName, index) => (
                        <TopCity key={index} city={cityName.city} />
                    ))}
                </div>
                <SearchBar setQuery={setQuery} />
                {weather && (
                    <div>
                        <MainTemp weather={weather} />
                        <Video conditions={conditions} />
                        <AdditionalInfo weather={weather} />
                        <Forecast weather={weather} />
                    </div>
                )}
                <Note />
            </div>
        </div>
    )
}

export default Home;