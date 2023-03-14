import rain from "./src/Rain.mp4"
import snow from "./src/Snow.mp4"
import clouds from "./src/Clouds.mp4"
import clear from "./src/Clear.mp4"
import "./Video.css"

const Video = ({ conditions: conditions }) => {

    const listOfConditions = [rain, snow, clouds, clear];
    const currentCondition = listOfConditions.filter((e) => e.includes(conditions));

    // USING DEFAULT VID WHEN NO BASIC CONDITION IS FULLFILED
    if (currentCondition.length == 0) {
        return (
            <div>
                <video src={clear} className="video" type='video/mp4' autoPlay loop muted playsInline />
            </div>
        )
    // USING VID CORRESPONDING TO BASIC SET OF CONDITIONS
    } else {
        return (
            <div>
                <video src={currentCondition[0]} className="video" type='video/mp4' autoPlay loop muted playsInline />
            </div>
        )
    }
}

export default Video;