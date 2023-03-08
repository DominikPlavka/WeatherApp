import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import TopCities from '../components/TopCities'
import CurrentDate from '../components/CurrentDate'
import Divider from '../components/Divider'
import "./Home.css"
import getFormattedWeatherData from '../components/services/weatherServices'
import { useEffect, useState } from 'react'

const Home = () => {
    
    const [query, setQuery] = useState({q: 'Spisska Nova Ves'});
    const [units, setUnits] = useState({units: 'metric'});
    const [weather, setWeather] = useState(null);

    useEffect (() => {
        const fetchWeather = async () => {
            await getFormattedWeatherData(query, units) //...query???
            .then((data) => {
                console.log(data)
                setWeather(data);
            });
        }
        fetchWeather();
    }, [query, units]);
 

    return (
        <div className='search-container'>
            <TopCities />
            <SearchBar setQuery={setQuery} />
            <Divider />
            <CurrentDate />
            <Video />
        </div>
    )
}

export default Home;