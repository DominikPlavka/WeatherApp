const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const units = 'metric';

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(baseUrl + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_WEATHER_API_KEY, units });

    const res = await fetch(url);
    return res.json();
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data;

    const { main: details, description, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, weather, speed, details, description, icon };
};

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
            'weather', searchParams)
        .then(formatCurrentWeather);

    return formattedCurrentWeather;
};

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { iconUrl };