import React from 'react'
import './NavLinks.css'
import { NavLink } from 'react-router-dom'

const NavLinks = props => {
  return (
    <ul className="nav-links">
        <li>
            <NavLink to='/'>
                ALL USERS
            </NavLink>
        </li>

        <li>
            <NavLink to='/1/places'>
                MY PLACES
            </NavLink>
        </li>

        <li>
            <NavLink to='/places/new/'>
                NEW PLACES
            </NavLink>
        </li>

        <li>
            <NavLink to='/auth'>
                AUTHENTICATE
            </NavLink>
        </li>

    </ul>
  )
}

export default NavLinks
