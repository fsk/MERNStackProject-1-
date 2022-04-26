import React from "react";
import { NavLink } from 'react-router-dom'

import './NavLink.css';

const NavLinks = props => {
    return(
        <ul className="nav-links">
            <NavLink to={"/"}>All Users</NavLink>
            <NavLink to={"/u1/places"}>My Places</NavLink>
            <NavLink to={"/places/new"}>Add Place</NavLink>
            <NavLink to={"/auth"}>Authenticate</NavLink>
        </ul>
    );
}

export default NavLinks;