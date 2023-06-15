import graySuit from "../assets/graySuit.PNG"
import BlackAndWhiteLogo from "../assets/BlackAndWhiteLogo.png"
import { Link } from "react-router-dom"



const Home = () => {


    return (
        <>
            <div className="flex items-center justify-center p-10">
                <img src={BlackAndWhiteLogo} alt='logo'/>
            </div>
            <div className="flex items-center justify-center p-10 " >
                <img src={graySuit} alt='Hero' className="rounded-full shadow-lg " />
            </div>

            
            <div className="container mx-auto px-4 text-center p-10">
                <p>
                    Hello, my name is Apolonio, and I'm a full-stack software engineer. Welcome! Please click to learn more about me and my work. Want to work together? Lets get in touch.
                </p>
            </div>
            <div className="flex items-center justify-center pb-20">
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>



        </>
    )
}

export default Home