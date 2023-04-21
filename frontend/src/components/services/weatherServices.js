import { DateTime } from "luxon";

const baseUrl = 'https://api.openweathermap.org/data/2.5/';
const units = 'metric';

const getWeatherData = async (infoType, searchParams) => {
    const url = new URL(baseUrl + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: process.env.REACT_APP_WEATHER_API_KEY, units });

    const res = await fetch(url);
    return res.json();
};

const formatForecastWeather = (data) => {
    let { timezone, daily, hourly } = data;

    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
    
    hourly = hourly.slice(1,6).map((d) => {
        console.log(d.dt)
        return {
            title: formatToLocalTime(d.dt, timezone, 'T'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    })

    return { timezone, daily, hourly };
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
        'weather', searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    const formattedForecastWeather = await getWeatherData('onecall', {
        lat, lon, exclude: 'current, minutely, alerts', units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => {
    return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
};

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { formatToLocalTime, iconUrl };