import React, {useState} from "react"
import PortfolioPage from "./PortfolioPage.js"







const LandingPage = () => {

    const [showPortfolio, setShowPortfolio] = useState(false)

    const handleClick = () => {
        setShowPortfolio(true)
    }




    return(
        
        <div className="center">
            
            <div>
                {showPortfolio ? (
                <PortfolioPage /> 
                ) : (
            <div>
                <h1>Apolonio Ortiz</h1>
                <button onClick={handleClick}>Enter</button>
            </div>
            )}


                <div class='light x1'></div>
                <div class='light x2'></div>
                <div class='light x3'></div>
                <div class='light x4'></div>
                <div class='light x5'></div>
                <div class='light x6'></div>
                <div class='light x7'></div>
                <div class='light x8'></div>
                <div class='light x9'></div>
            </div>
        </div>
        
    )
}

export default LandingPage