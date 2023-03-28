import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../context";
import "./handles.css"
import Fade from "react-reveal/Fade";
export default function Handles(){
    const formRef=useRef();
    const [done, setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return (
        <div className="h" style={{backgroundColor:darkMode?"rgb(46, 46, 46)":"white"}}>
            <div className="line" style={{backgroundColor:darkMode?"white":"rgb(167, 167, 167)"}}></div>
            <div className="h-cont">
                <div className="h-txt">To get to know me better, follow me on these social media sites</div>
                <Fade bottom delay={500}>
                <div className="h-icons">
                    <a href="https://github.com/Avy2808"><div className="icon git"></div></a>
                    <a href="https://www.linkedin.com/in/avyukt-r-kumar/"><div className="icon link"></div></a>
                    <a href="https://leetcode.com/Iteratoravyy/"><div className="icon lc"></div></a>
                    <a href="https://auth.geeksforgeeks.org/user/avyuktrkumar/"><div className="icon gfg"></div></a>
                    <a href="https://www.codingninjas.com/codestudio/profile/23_Avyukt"><div className="icon cn"></div></a>
                    <a href="https://www.codechef.com/users/avyuktcc_2808"><div className="icon cc"></div></a>
                </div>
                </Fade>
            </div>
            <div className="copy" style={{backgroundColor:darkMode?"black":"rgb(167, 167, 167)"}}>
                <div className="temp" style={{color:darkMode?"white":"black"}}>Designed and Developed by Avyukt R Kumar</div>
                <div className="temp" style={{color:darkMode?"white":"black"}}>Copyright:{' '} &copy; {new Date().getFullYear()}ARK</div>
                {/* <div className="temp"></div> */}
            </div>
        </div>
    )
}