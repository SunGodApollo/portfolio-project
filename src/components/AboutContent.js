import "./AboutContentStyles.css"
import { Link } from "react-router-dom"
import defimage from "../assets/defimage.jpg"

const AboutContent = () => {

    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm a deez nutz developer. I create responsive and secure websites for deez nutz</p>
                <Link to="/contact" className="btn">
                   Contact
                </Link>
            </div>


            <div className="right">
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