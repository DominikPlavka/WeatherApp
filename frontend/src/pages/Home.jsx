import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import Note from '../components/Note'
import getFormattedWeatherData from '../components/services/weatherServices'
import MainTemp from '../components/MainTemp'
import Forecast from '../components/Forecast'
import { useEffect, useState } from 'react'
import Heading from '../components/Heading'
import AdditionalInfo from '../components/AdditionalInfo'
import "./Home.css"

const Home = () => {

    const [query, setQuery] = useState({q: "Spisska Nova Ves"});
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);
    const [conditions, setConditions] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData({...query, units})
                .then((data) => {
                    setWeather(data);
                    setConditions(data.details);
                });
        }
        fetchWeather();
    }, [query, units]);

    console.log(weather)

    return (
            <div className='container'>
                <div className='search-container'>
                    <Heading heading="1" text='Search Weather App' />
                    <SearchBar setQuery={setQuery} />
                    { weather && (
                        <div>
                            <MainTemp weather={weather} />
                            <Video conditions={conditions} />
                            <AdditionalInfo weather={weather} />
                            <Forecast weather={weather}/>
                        </div>
                    )}
                    <Note />
                </div>
            </div>
    )
}

export default Home;