import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import "./App.css"
import "./index.css"






const App = () => {

  const [projects, setProjects] = useState([])


  return(
    <div className="gradient-background">
      <Navbar />
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects projects={projects}/>} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App