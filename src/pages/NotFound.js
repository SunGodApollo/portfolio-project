import { motion } from "framer-motion"


const NotFound =  () => {



    return (

        <motion.div
        initial={{ width:0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
        >
            <title>Woops nothing to see here!</title>
        </motion.div>
    )
}

export default NotFound