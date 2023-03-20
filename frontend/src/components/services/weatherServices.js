const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const units = 'metric'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(baseUrl + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_WEATHER_API_KEY, units });

    return fetch(url)
        .then((res) => res.json())
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

/*const formatForecastWeather = (data) => {
    let {timezone, daily, hourly} = data;
    daily = daily.slice(1,6).map();
}*/

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
            'weather', searchParams)
        .then(formatCurrentWeather);

        const {lat, lon} = formatCurrentWeather;

    return formattedCurrentWeather;
};

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`

/*const formattedForecastWeather = await getFormattedWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current, minutely, alerts',
    units: searchParams.units
}).then(formatForecastWeather);*/

export default getFormattedWeatherData;

export { iconUrl };