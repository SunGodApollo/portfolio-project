
import HeroSection from "../components/HeroSection.js"
import Work from "../components/Work.js"
import { motion } from "framer-motion"


const Projects = () => {



    return (
        <motion.div
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <HeroSection heading="PROJECTS." text="Some of my most recent work. If you have any questions, send me a message!"/>
            <Work />

        </motion.div>



    )
}

export default Projects