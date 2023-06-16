import HeroSection from "../components/HeroSection.js"
import Form from "../components/Form.js"
import { motion } from "framer-motion"

const Contact = () => {



    return (
        <motion.div
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <HeroSection heading="CONTACT ME." text="Want to work together? Something on your mind? Send me an email! I'll be sure to reply in as little as 1 hour."/>
            <Form />    
        </motion.div>



    )
}

export default Contact