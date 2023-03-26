import "./intro.css"
import Me from "../../img/Me.jpg"

export default function Intro(){
    return (
        <div className="i" id="intro">
            <div className="s-l-shape"></div>
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, my name is</h2>
                    <h1 className="i-name">Avyukt R Kumar</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Coding Enthusiast</div>
                            <div className="i-title-item">Cricket Geek</div>
                            <div className="i-title-item">Art Lover</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        Hey guys!!! Avyukt here ! Can't wait to show you guys all about myself through this Personal Portfolio Website made from scratch by me. 
                    </p>
                    <p className="i-desc">
                        Please scroll down to know more about me and don't forget to give your valuable feedback in the contact form below. Hope you enjoy!!!
                    </p>
                </div>
            </div>
            <div className="i-right">
                <div className="i-bg">
                    <img src={Me} className="i-img" />
                </div>
                
            </div>
            <div className="s-r-shape"></div>
        </div>
    )
}