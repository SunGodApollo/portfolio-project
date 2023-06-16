import { Routes, Route, useLocation } from "react-router-dom"
import React from "react"
import About from "../pages/About.js"
import Contact from "../pages/Contact"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import NotFound from "../pages/NotFound"
import {AnimatePresence} from "framer-motion"


const AnimatedRoutes = () => {


    const location = useLocation()

    return (

        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects projects={Projects}/>} />
            <Route path="/about" element={<About about={About}/>} />
            <Route path="/contact" element={<Contact contact={Contact}/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes