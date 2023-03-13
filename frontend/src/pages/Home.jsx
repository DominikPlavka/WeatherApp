import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import TopCities from '../components/TopCities'
import CurrentDate from '../components/CurrentDate'
import Divider from '../components/Divider'
import getFormattedWeatherData from '../components/services/weatherServices'
import MainTemp from '../components/MainTemp'
import { useEffect, useState } from 'react'
import "./Home.css"

const Home = () => {

    const [query, setQuery] = useState({ q: 'Spisska Nova Ves' });
    const [units, setUnits] = useState({ units: 'metric' });
    const [weather, setWeather] = useState(null);
    const [conditions, setConditions] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData(query, units)
                .then((data) => {
                    setWeather(data);
                    setConditions(data.details);
                });
        }
        fetchWeather();
    }, [query, units]);

    return (
        <div className='search-container'>
            <TopCities />
            <SearchBar setQuery={setQuery} />
            {weather && (
                <div>
                    <MainTemp weather={weather} />
                    <Video conditions={conditions} setConditions={setConditions}/>
                </div>
            )}
            <Divider />
            <CurrentDate />
        </div>
    )
}

export default Home;