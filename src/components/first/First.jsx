import "./first.css"
import coverVideo from "../../media/coverVideo.mp4"
import Fade from "react-reveal/Fade"
export default function First(){
    return(
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <div className="typewriter">
                <h1>Avyukt R Kumar</h1>
            </div>
            <Fade bottom>
                <p>Welcome to my portfolio</p>
                <button className="btn"><a href="#intro" className="bt">Explore</a></button>
            </Fade>
        </div>
    )
}