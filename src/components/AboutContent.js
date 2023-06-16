import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import defimage from "../assets/defimage.jpg"
import SkillBar from "./SkillBar"

const AboutContent = () => {

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Hi! I'm a full-stack developer. I enjoy working on projects that will challenge me and mentally stimulate me. I love working with others as well! If you want to work together, or if you have any questions, please click the "Contact" button! </p>
                <Link to="/contact" className="btn">
                   Contact
                </Link>
            </div>


            <div className="right">
                <SkillBar />
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={defimage} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={defimage} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent