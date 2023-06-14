import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import "./NavbarStylings.css"
import React, { useState } from "react"


const Navbar = () => {

    

    return (
        <nav className='bg-black/50 backdrop-blur fixed top-0 left-0 w-full'>
            <div className="header">
                <Link to="/"> 
                    <h1>Portfolio</h1>
                </Link>
                <ul className="nav-menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar