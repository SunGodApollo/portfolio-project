import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import myselfBlack from "../assets/myselfBlack.PNG"
import moreKoding from "../assets/moreKoding.jpg"
import SkillBar from "./SkillBar"
import ApolonioOrtizResumeVersion4 from "../assets/ApolonioOrtizResumeVersion4.pdf"

const AboutContent = () => {

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p> Recently, I discovered my passion, and that is: software development. I enjoy working on projects that will challenge me and mentally stimulate me. I love working with others as well! If you want to work together, or if you have any questions, please do not hesitate to send me a message.</p>
                <Link to="/contact" className="btn">
                   Contact
                </Link>
                <a href={ApolonioOrtizResumeVersion4} download={ApolonioOrtizResumeVersion4} className="btn">
                    Download Resume
                </a>
            </div>


            <div className="right">
                
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={moreKoding} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={myselfBlack} className="img" alt="true" />
                    </div>
                </div>
                <SkillBar />
            </div>
        </div>
    )
}

export default AboutContent