import "./first.css"
import coverVideo from "../../media/coverVideo.mp4"
import Fade from "react-reveal/Fade"
import { useContext } from "react";
import { ThemeContext } from "../../context";
export default function First(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <div className="typewriter">
                <h1>Avyukt R Kumar</h1>
            </div>
            <Fade bottom>
                <p style={{color:darkMode?"white":"black"}}>Welcome to my portfolio</p>
                <button className="btn"><a href="#intro" className="bt">Explore</a></button>
            </Fade>
        </div>
    )
}