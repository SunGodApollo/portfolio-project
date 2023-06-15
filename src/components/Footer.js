import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa"


const Footer = () => {


    return (
        <>
            <footer className='bg-black/50 backdrop-blur'>
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
                                <p>1-235-684-6429</p>
                                </h4>
                            </div>
                            <div className="email">
                                <h4>
                                <FaMailBulk size={30} style={{ color: "#fff", marginRight: "2rem"}} />
                                <p>deeznutz@gmail.com</p>
                                </h4>
                            </div>
                        </div>


                        <div className="right">
                            <h4>About the company</h4>
                            <p> This is me, Apolonio Ortiz. CEO & Founder of Apolonio Tech. I enjoy discussing new projects and overcoming challenges.</p>
                            <div className="social">
                            <FaLinkedin size={40} style={{ color: "#fff", marginRight: "1rem"}} />
                            <FaGithub size={40} style={{ color: "#fff", marginRight: "1rem"}} />

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer