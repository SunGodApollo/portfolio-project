import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import "./App.css"
import "./index.css"




const App = () => {

  const location = useLocation()


  return(
    <div className="gradient-background">
      <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projects={Projects}/>} />
        <Route path="/about" element={<About about={About}/>} />
        <Route path="/contact" element={<Contact contact={Contact}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App