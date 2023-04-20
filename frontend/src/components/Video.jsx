import Rain from "./src/Rain.mp4"
import Snow from "./src/Snow.mp4"
import Clouds from "./src/Clouds.mp4"
import Clear from "./src/Clear.mp4"
import Mist from "./src/Mist.mp4"
import "./Video.css"

const Video = ({ conditions }) => {

    const listOfConditions = [Rain, Snow, Clouds, Clear, Mist];
    const currentCondition = listOfConditions.filter((e) => e.includes(conditions));

    // USING DEFAULT VID WHEN NO BASIC CONDITION IS FULLFILED
    if (currentCondition.length > 0) {
        return (
            <div>
                <video src={currentCondition[0]} className="video" type='video/mp4' autoPlay loop muted />
            </div>
        )
        // USING VID CORRESPONDING TO BASIC SET OF CONDITIONS
    } else {
        return (
            <div>
                <video src={Clear} className="video" type='video/mp4' autoPlay loop muted />
            </div>
        )
    }
}

export default Video;