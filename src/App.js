import React, {useState} from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import ProjectIndex from "./pages/ProjectIndex"
import ProjectShow from "./pages/ProjectShow"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import "./App.css"






const App = () => {

  const [projects, setProjects] = useState([])


  return(
    <div className="gradient-background">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectindex" element={<ProjectIndex projects={projects}/>} />
        <Route path="/projectshow" element={<ProjectShow />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />


    </div>
  )
}

export default App