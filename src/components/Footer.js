import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = () => {


    return (
        <>
            <footer className='bg-black/50 backdrop-blur  bottom-0 left-0 w-full'>
                <div className="footer">
                    <div className="footer-container">
                        <div className="left">
                            <div className="location">
                                <h4>
                                <FaHome size={30} style={{ color: "#fff", marginRight: "2rem"}} />
                                    <p>San Diego, CA</p>
                                </h4>
                            </div>
                            <div className="phone">
                                <h4>
                                <FaPhone size={30} style={{ color: "#fff", marginRight: "2rem"}} />
                                <p>360-515-6293</p>
                                </h4>
                            </div>
                            <div className="email">
                                <h4>
                                <FaMailBulk size={30} style={{ color: "#fff", marginRight: "2rem"}} />
                                <p>apolonio.d.ortiz@gmail.com</p>
                                </h4>
                            </div>
                        </div>


                        <div className="right">
                            <h4>About the Company</h4>
                            <p> Apolonio Ortiz. CEO & Founder of ApoloCorp. I enjoy discussing new projects and overcoming challenges.</p>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/apolonioortiz/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                                </a>
                                <a href="https://github.com/SunGodApollo" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={40} style={{ color: "#fff", marginRight: "1rem" }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer