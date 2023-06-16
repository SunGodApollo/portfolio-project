import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import "./FormStyles.css"



const Form = () => {

        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();

          emailjs.sendForm(
            'service_vbicsq1', 
            'template_7ltqd3a', 
            form.current, 
            'PUoxndt__jeVjjCJO')
          .then((result) => {
              console.log(result.text);
          }, 
            (error) => {
              console.log(error.text);
          });
      };    

    return (
        <div className= "form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name" />
                <label>Your Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <button type="submit" className="btn">Submit</button>
            </form>


        </div>
    )
}

export default Form