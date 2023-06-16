import { useState } from "react"
import "./FormStyles.css"



const Form = () => {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }



    return (
        <div className= "form">
            <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            />
            <label>Email</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            />
            <label>Subject</label>
            <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            />
            <label>Message</label>
            <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Type your message here"
            />
            <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    )
}

export default Form