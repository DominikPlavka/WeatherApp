import rain from "./src/rain.mp4"
import "./Video.css"

const Video = () => {
    return (
        <div>
            <video className="video" autoPlay loop muted>
                <source src={rain} />
            </video>
        </div>
    )
}

export default Video;