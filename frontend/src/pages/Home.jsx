import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import Note from '../components/Note'
import getFormattedWeatherData from '../components/services/weatherServices'
import MainTemp from '../components/MainTemp'
import Forecast from '../components/Forecast'
import { useEffect, useState } from 'react'
import { useCitiesContext } from '../hooks/useCitiesContext'
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

    /////////////////// TEMP DATA FOR CITIES - FETCH ALL DATA

    const {cities, dispatch} = useCitiesContext();

    useEffect(() => {
        const getCities = async () => {
            const response = await fetch('/api/city');
            
            if (!response.ok) {
                throw new Error('There was a problem to fetch data');
            }

            const data = await response.json();

            dispatch({type: "GET_CITIES", payload: data})
        }
        getCities()
    }, [cities])

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