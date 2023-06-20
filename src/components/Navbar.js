import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react"
import "./NavbarStylings.css"



const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeNavbar = () => {
        setClick(false)
    }


    return (
        <nav className='bg-black/50 backdrop-blur fixed top-0 left-0 w-full z-3'>
            <div className="header">
                <Link to="/" onClick={closeNavbar}> 
                    <h1>Portfolio</h1>
                </Link>
                <ul className={click? "nav-menu active" : "nav-menu"}>
                    <li>
                        <Link to="/" onClick={closeNavbar}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeNavbar}>
                            Projects
                        </Link>
                    </li>                    
                    <li>
                        <Link to="/about" onClick={closeNavbar}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeNavbar}>
                            Contact
                        </Link>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
                    
                    
                </div>
            </div>

        </nav>
    )
}

export default Navbar