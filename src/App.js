import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AnimatedRoutes from "./components/AnimatedRoutes"
import "./App.css"
import "./index.css"




const App = () => {

  


  return(
    <div className="gradient-background">
      <Navbar />
     
      <AnimatedRoutes />


      <Footer />


    </div>
  )
}

export default App