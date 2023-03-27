import { useContext, useRef, useState } from "react";
import "./about.css"
import { ThemeContext } from "../../context"
import AboutImg from "../../img/about.png"
import Fade from "react-reveal/Fade";

export default function About(){
    const formRef=useRef();
    const [done, setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="a">
                <div className="a-shape1"></div>
            <div className="a-left">
                <Fade bottom>
                <div className="a-card" style={{boxShadow:darkMode?"-10px -10px rgb(44, 172, 44)":"-10px -10px #222"}}>
                    <img src={AboutImg} className="a-img" />
                </div>
                </Fade>
            </div>
            <div className="a-right">
                <div className="a-wrapper">
                   <Fade right>
                   <h1 className="a-title">About Me</h1>
                    <p className="i-subt">
                        The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.
                    </p>
                    <p className="a-desc">
                        I am a student of National Institute of Technology, Raipur. I pursue Bachelors of Technology specialising in Information Technology. Looking forward to making a career in Software Development and mastering my skills in Data Structures and Algorithms and Web Development in the process. I am also a crazy cricket fanatic who closely follows the game.
                    </p>
                   </Fade>
                </div>
            </div>
                <div className="a-shape2"></div>
        </div>
    )
}