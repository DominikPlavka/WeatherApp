import { useEffect, useState } from "react";
import "./CurrentDate.css";

const CurrentDate = () => {

    const currDate = new Date().toLocaleDateString();

    const [time, setTime] = useState(new Date());

    function refreshTime() {
        setTime(new Date());
    }

    useEffect(() => {
        const timer = setInterval(refreshTime, 1000);
        return function cleanup() {
            clearInterval(timer);
        }
    }, []);

    return (
        <p className="date">Your local time: {time.toLocaleTimeString()} | Your local date: {currDate}</p>
    )
}

export default CurrentDate;