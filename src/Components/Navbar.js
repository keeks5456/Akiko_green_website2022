import React from 'react'
import { NavLink } from "react-router-dom";
//styles
import { NavContainer, } from '../Styles-Components/NavbarStyles';
const Navbar = () => {


  return (
    <NavContainer>
    <NavLink to="/home" className={({isActive}) => (isActive ? "active" : 'main-nav')} >Home</NavLink>
    <NavLink to='/about' className={({isActive}) => (isActive ? "active" : 'main-nav')}  >About</NavLink>
    <NavLink to='/projects' className={({isActive}) => (isActive ? "active" : 'main-nav')}  >Projects</NavLink>
    <NavLink to='/blogs' className={({isActive}) => (isActive ? "active" : 'main-nav')}   >Blogs</NavLink>
    <NavLink to='/contacts' className={({isActive}) => (isActive ? "active" : 'main-nav')}  >Contact</NavLink>
    </NavContainer>
  )
}

export default Navbar