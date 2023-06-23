
import HeroSection from "../components/HeroSection.js"
import AboutContent from "../components/AboutContent.js"
import { motion } from "framer-motion"
const About = () => {



    return (
        <motion.div
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <HeroSection heading="ABOUT." text="I'm a friendly and easy to work with full-stack developer. I enjoy working on projects in my spare time. I come equipped with a variety of skills. Check them out below!"/>
            <AboutContent />

        </motion.div>



    )
}

export default About