import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState, useContext } from "react"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"

export default function Contact(){
    const formRef=useRef();
    const [done, setDone]=useState(false);
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_wd8msck', 'template_gm2nq1k', formRef.current, '7N2mEuYaHpU8A9494')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's get in touch</h1>
                    <div className="c-info">
                        <div className="c-item">
                            <img src={Phone} className="c-icon" />+91 8792942504
                        </div>
                        <div className="c-item">
                            <img src={Email} className="c-icon" />avyuktrkumar@gmail.com
                        </div>
                        <div className="c-item">
                            <img src={Address} className="c-icon" />Hostel-H, Sirpur, NIT Raipur
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Hey! You've made it to the end!!!</b> Let's get in touch. Please do give me your valuable feedback or anything that you would want to know or tell.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor:darkMode?"#333":"white", color:darkMode?"white":"black", borderBottomColor:darkMode?"white":"black"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{backgroundColor:darkMode?"#333":"white", color:darkMode?"white":"black", borderBottomColor:darkMode?"white":"black"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{backgroundColor:darkMode?"#333":"white", color:darkMode?"white":"black", borderBottomColor:darkMode?"white":"black"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{backgroundColor:darkMode?"#333":"white", color:darkMode?"white":"black", borderColor:darkMode?"white":"black"}} name="message" placeholder="Message..." rows="5"></textarea>
                        <button>Submit</button>
                        {done && <div className="endmsg">Thank you...</div>}
                    </form>
                </div>
            </div>
        </div>
    )
}