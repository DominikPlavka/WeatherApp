import "./AdditionalInfo.css"
import { WiHorizonAlt, WiHorizon, WiHumidity } from "react-icons/wi";
import { IconContext } from "react-icons";
import { DateTime } from "luxon";


const AdditionalInfo = ({ weather: { sunrise, sunset, humidity, timezone, dt } }) => {


    const formatToLocalTime = (secs, zone, format = "T") => {
        return DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
    };

    const sunriseTime = formatToLocalTime(sunrise, timezone);
    const sunsetTime = formatToLocalTime(sunset, timezone);
    
    return (
        <IconContext.Provider value={{ color: "white", size: "2em",}}>
            <div className="add-info-container">
                <p className="add-data"><WiHorizonAlt />&nbsp;{sunriseTime}&nbsp;|&nbsp;<WiHorizon />&nbsp;{sunsetTime}&nbsp;|&nbsp;<WiHumidity />&nbsp;{humidity}</p>
            </div>
        </IconContext.Provider>
    )
}

export default AdditionalInfo;