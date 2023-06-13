import { Link } from "react-router-dom"


const Navbar = () => {


    return (
        <nav className='bg-black/50 backdrop-blur textx-2xl font-medium'>
            <ul className='flex gap-12'>
                <Link to="/"> 
                    <li>Home</li>
                </Link>
                <Link to="/ProjectIndex"> 
                    <li>Projects</li>
                </Link>
            </ul>

        </nav>
    )
}

export default Navbar