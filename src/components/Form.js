import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./FormStyles.css"



const Form = () => {

    const [isMessageSent, setMessageSent] = useState(false)


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
        'service_vbicsq1', 
        'template_7ltqd3a', 
        form.current, 
        'PUoxndt__jeVjjCJO')
        .then((result) => {
            console.log(result.text);
        setMessageSent(true)
        form.current.reset()

        setTimeout(() => {
            setMessageSent(false)
        }, 5000)
        }, 
        
        (error) => {
            console.log(error.text);
        });

    } 

    return (
        <div className= "form">
            <div className="project-heading">
                <h1>Lets get in touch!</h1>
            </div>

            {isMessageSent && <p className="message-sent">Message sent! Please allow up to 2 hours for a response.</p>}

            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name" className="input-field"/>
                <label>Your Email</label>
                <input type="email" name="user_email" className="input-field"/>
                <label>Message</label>
                <textarea name="message" className="input-field"/>
                <button type="submit" className="btn">Submit</button>
            </form>


        </div>
    )
}

export default Form