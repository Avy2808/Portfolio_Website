import "./first.css"
import coverVideo from "../../media/coverVideo.mp4"
export default function First(){
    return(
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Avyukt R Kumar</h1>
            <p>Welcome to my portfolio</p>
            <button className="btn"><a href="#intro" className="bt">Explore</a></button>
        </div>
    )
}