import "./AdditionalInfo.css"
import { WiHorizonAlt, WiHorizon, WiHumidity } from "react-icons/wi";
import { IconContext } from "react-icons";

const AdditionalInfo = ({ weather: { sunrise, sunset, humidity } }) => {

    const timeSunrise = new Date(sunrise*1000);
    const sunriseTime = timeSunrise.toLocaleTimeString();

    const timeSunset = new Date(sunset*1000);
    const sunsetTime = timeSunset.toLocaleTimeString();

    return (
        <IconContext.Provider value={{ color: "white", size: "2em",}}>
            <div className="add-info-container">
                <p className="add-data"><WiHorizonAlt />&nbsp;{sunriseTime}&nbsp;|&nbsp;<WiHorizon />&nbsp;{sunsetTime}&nbsp;|&nbsp;<WiHumidity />&nbsp;{humidity}</p>
            </div>
        </IconContext.Provider>
    )
}

export default AdditionalInfo;