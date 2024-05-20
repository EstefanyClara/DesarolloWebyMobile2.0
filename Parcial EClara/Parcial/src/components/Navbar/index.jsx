import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" className="title">
           Juegos Olímpicos de París 2024
        </Link>
        <ul>
            <li>
                <NavLink className='about' to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/game">Detalles</NavLink>
            </li>

        </ul> 
    </nav>
  )
}