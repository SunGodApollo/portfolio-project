import graySuit from "../assets/graySuit.PNG"
import BlackAndWhiteLogo from "../assets/BlackAndWhiteLogo.png"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"



const Home = () => {


    return (
        <motion.div 
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <div className="flex items-center justify-center p-10">
                <img src={BlackAndWhiteLogo} alt='logo'/>
            </div>
            <div className="flex items-center justify-center p-10 " >
                <img src={graySuit} alt='Hero' className="rounded-full shadow-lg " />
            </div>

            
            <div className="container mx-auto px-4 text-center p-10">
                <p>
                    Hello, my name is Apolonio, and I'm a full-stack software engineer. Thank you for visiting! Please check out my projects section to learn more about me and my work. Want to work together? Go to "Contact" and let's get started!
                </p>
            </div>
            <div className="flex items-center justify-center pb-20">
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>

        </motion.div>
    )
}

export default Home