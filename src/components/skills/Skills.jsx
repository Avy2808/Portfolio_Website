import "./skills.css"
import Resume from "../../img/resume.jpeg"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Fade from "react-reveal/Fade";

export default function Skills(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    return (
        <div className="s" id="skills">
            <div className="s-title" style={{color:darkMode?"white":"rgb(54, 54, 54)"}}>Skills and Projects</div>
            <div className="s-left">
            <Fade left>
                <div className="s1-wrapper" style={{border:darkMode?"0px solid rgb(90, 90, 90)":"3px solid rgb(54, 54, 54)"}}>
                        <div className="bgs"></div>
                        <div className="bgs bgs2"></div>
                        <div className="bgs bgs3"></div>
                        <h4 className="s-sub" style={{color:darkMode?"black":"rgb(54, 54, 54)"}}>Here is a list of some of my skills</h4>  
                        {/* <ul className="s-list"> */}
                            <li className="s-item">Competent knowledge in Data Structures and Algorithms</li>
                            <li className="s-item">Proficiency in Web Development</li>
                            <li className="s-item">Adequate Competitive Programming Skills</li>
                            <li className="s-item">Sufficient knowledge in OOPS, OS, DBMS</li>
                            <li className="s-item">Art enthusiast and Cricket Geek</li>
                        {/* </ul> */}
                </div>
            </Fade>
            <Fade left delay={800}>
                <div className="s2-wrapper" style={{border:darkMode?"0px solid rgb(90, 90, 90)":"3px solid rgb(54, 54, 54)"}}>
                    <div className="bgs"></div>
                    <div className="bgs bgs2"></div>
                    <div className="bgs bgs3"></div>
                    <h4 className="s-sub" style={{color:darkMode?"black":"rgb(54, 54, 54)"}}>Here are some of my Projects</h4>
                    <li className="p-item"><a href="https://avy2808.github.io/Portfolio_Website/">Portfolio Website</a></li>
                    <li className="p-item"><a href="https://avy2808.github.io/KBC_React_App/" style={{color:darkMode?"black":"black"}}>Trivia Millionaire App</a></li>
                    <li className="p-item"><a href="https://avy2808.github.io/Snake-Game/" style={{color:darkMode?"black":"black"}}>Snake Game</a></li>
                </div>
            </Fade>
            </div>
            <Fade right delay={500}>
            <div className="s-right">
                <div className="resume">
                    <a href="https://flowcv.com/resume/oe30t4hvgv"><img src={Resume} className="resume-img" /></a>
                </div> 
                <div className="resume-link">
                    <h4 style={{color:darkMode ? "white" : "black"}}>This is a link to my resume</h4>
                    <a href="https://flowcv.com/resume/oe30t4hvgv" style={{color:darkMode ? "white" : "black"}}>Click here and Explore!!!</a>
                </div> 
            </div>
            </Fade>
        </div>
    )
}