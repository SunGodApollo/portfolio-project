import "./HeroSectionStyles.css"



const HeroSection = ({heading, text})  => {


    return (

        <div className="hero-section">
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
        </div>
    )
}

export default HeroSection