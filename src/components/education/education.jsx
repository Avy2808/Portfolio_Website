import "./education.css"
import books from "../../img/books.jpg"
import exams from "../../img/exams.jpg"
import tech from "../../img/technology.jpg"
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Fade from "react-reveal/Fade";

export default function Education(){
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    return(
        <div className="e">
            <h2 className="e-title">Education</h2>
            <div className="e-shape"></div>
            <div className="e-wrapper">
                <Fade bottom>
                <div className="e-left" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg1"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>Primary Schooling</div>
                        </div>
                        <div className="e-wrap">
                            <div className="e-comp-title">Primary Schooling</div>
                            <div className="e-imgbox">
                                <img src={books} className="e-img" />
                            </div>
                            <div className="e-desc">
                                <p>I did my primary and secondary schooling from National Center For Excellence over a period of 10 years. Having competed in various co-curricular activities and academic competitions, I received various medals and certificates for my whole-hearted participation. I passed 10th grade with a percentage of 93.8%.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Fade>
                <Fade bottom delay={1000}>
                <div className="e-center" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg2"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>High Schooling</div>
                        </div>
                    <div className="e-wrap">
                        <div className="e-comp-title">High Schooling</div>
                        <div className="e-imgbox">
                            <img src={exams} className="e-img" />
                        </div>
                    <div className="e-desc">
                        Having shown an interest in Maths and Physics, I started preparing for the Joint Entrance Examination with Allen Career Institute and Geetanjali Olympiad School during 11th and 12th grade. I eventually passed 12th with 91% and got myself a percentile of 98.1%ile in the JEE Mains examination.
                    </div>
                    </div>
                    </div>
                </div>
                </Fade>
                <Fade bottom delay={2000}>
                <div className="e-right" style={{border:darkMode?"2px solid white":"2px solid black"}}>
                    <div className="content">
                        <div className="back">
                            <div className="bg3"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>College</div>
                        </div>
                    <div className="e-wrap">
                        <div className="e-comp-title">College</div>
                        <div className="e-imgbox">
                            <img src={tech} className="e-img" />
                        </div>
                    <div className="e-desc">
                        Currently I am a student of National Institute of Technology, Raipur pursuing Bachelor's of Technology in Information Technology. I am a part of the tech team of Sanskriti Club. I also have an average CGPA of 8.79 across the first 3 semesters of college. Eagerly looking forward to building my career at the moment.
                    </div>
                    </div>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}