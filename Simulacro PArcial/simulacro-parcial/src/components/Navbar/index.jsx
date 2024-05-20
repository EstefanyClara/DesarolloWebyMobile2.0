import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="title">
           Casa
        </Link>
        <ul>
            <li>
                <NavLink className='about' to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul> 
    </nav>
  )
}
