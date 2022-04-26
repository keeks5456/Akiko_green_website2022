import React from 'react'
import { Link } from "react-router-dom";
//styles
import { NavContainer } from '../Styles-Components/NavbarStyles';
const Navbar = () => {
  return (
    <NavContainer>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/blogs">Blogs</Link>
    <Link to="/contact">Contact</Link>
    </NavContainer>
  )
}

export default Navbar