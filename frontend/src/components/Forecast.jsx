import { iconUrl } from "./services/weatherServices";
import "./Forecast.css";

const Forecast = ({ weather }) => {

    const { daily, hourly } = weather;

    return (
        <div className="forecast">
            <div className="forecast-container">
                <h3>Hourly forecast</h3>
                <div className="hourly">
                    {hourly.map((item, key) => (
                        <div key={key}className="window">
                            <p>{item.title}</p>
                            <img src={iconUrl(item.icon)} alt="icon of weather" />
                            <p>{`${item.temp.toFixed()}°C`}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="forecast-container">
                <h3>Daily forecast</h3>
                <div className="daily">
                    {daily.map((item, key) => (
                        <div key={key} className="window">
                            <p>{item.title}</p>
                            <img src={iconUrl(item.icon)} alt="forecast icon" />
                            <p>{`${item.temp.toFixed()}°`}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Forecast;