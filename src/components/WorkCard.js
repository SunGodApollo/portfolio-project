import "./WorkCardStyles.css"
import { NavLink } from "react-router-dom"

const WorkCard = ({imgsrc, title, text, view, source}) => {

    return (
        <div className="project-card">
        <img src = {imgsrc} alt="projects"/>
        <h1 className="project-title">{title}</h1>
        <div className="pro-details">
            <p>{text}</p>
            <div className="pro-btns">
                <NavLink to={view} target="_blank" className="btn">View</NavLink>
                <NavLink to={source} target="_blank" className="btn">Source</NavLink>
            </div>
        </div>
    </div>
        
    )
}

export default WorkCard