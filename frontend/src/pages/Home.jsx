import SearchBar from '../components/SearchBar'
import Video from '../components/Video'
import Note from '../components/Note'
import getFormattedWeatherData from '../components/services/weatherServices'
import MainTemp from '../components/MainTemp'
import Forecast from '../components/Forecast'
import { useEffect, useState } from 'react'
import { useCitiesContext } from '../hooks/useCitiesContext'
import { useAuthContext } from '../hooks/useAuthContext'
import TopCity from '../components/TopCity'
import AdditionalInfo from '../components/AdditionalInfo'
import "./Home.css"

const Home = () => {

    const [query, setQuery] = useState({ q: "Spisska Nova Ves" });
    const [units, setUnits] = useState('metric');
    const [weather, setWeather] = useState(null);
    const [conditions, setConditions] = useState(null);
    const [error, setError] = useState(null);

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

    /////////////////// DATA FOR CITIES - FETCH ALL DATA

    const { cities, dispatch } = useCitiesContext();
    const { user } = useAuthContext();

    useEffect(() => {
        const getCities = async () => {
            const response = await fetch('/api/city',
                {
                    headers: { Authorization: `Bearer ${user.token}` },
                }
            );

            console.log(response)

            const data = await response.json();
            
            console.log(data)

            if (response.ok) {
                dispatch({ type: "GET_CITIES", payload: data })
            }
        }
        if (user) {
            getCities()
        }
        
    }, [user, dispatch])

    //////////////////

    return (
        <div className='container'>
            <div className='search-container'>
                <div className='top-cities'>
                    {cities &&
                        cities.map((city, index) => (
                            <TopCity key={index} city={city} setQuery={setQuery} setError={setError} />
                        ))}

                </div>
                {error && <p>{error}</p>}
                <SearchBar setQuery={setQuery} />
                {weather && (
                    <div>
                        <MainTemp weather={weather} setError={setError} />

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