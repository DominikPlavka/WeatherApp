import rain from "./src/Rain.mp4"
import snow from "./src/Snow.mp4"
import clouds from "./src/Clouds.mp4"
import { useState, useEffect } from "react"
import "./Video.css"

const Video = ({ conditions: conditions }) => {

    useEffect(() => {
    }, [conditions]);

    const listOfConditions = [rain, snow, clouds];
    const currentCondition = listOfConditions.filter((e) => e.includes(conditions));

    return (
        <div>
            <p>{conditions}</p>
            <p>{currentCondition[0]}</p>
            <video className="video" type='video/mp4' autoPlay loop muted playsInline>
                <source src={currentCondition[0]} />
            </video>
        </div>
    )
}

export default Video;