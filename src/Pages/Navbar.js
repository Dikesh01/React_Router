import React from "react";
import { Link, NavLink} from "react-router-dom";

const Navbar = () => {

    return(
        <div className="navbar">
            <NavLink to="./">Home</NavLink>
            <NavLink to="./about">About</NavLink>
            <NavLink to="./contact">Contact</NavLink>
            <NavLink to="./blog">Blog</NavLink>
            {/* <a href="./">Home</a>
            <a href="./about">About</a>
            <a href="./contact">Contact</a>
            <a href="./blog">Blog</a> */}
        </div>
    )
}

export default Navbar;