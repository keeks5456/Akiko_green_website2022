import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { motion } from "framer-motion";
//styles
import { NavContainer } from "../Styles-Components/NavbarStyles";
const Navbar = () => {
  return (
    <motion.div animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <NavContainer>
        <NavLink
        
          to="#home"
          smooth
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Home
        </NavLink>
{ /*      <NavLink
          to="#about"
          smooth
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          About
        </NavLink>
  */}
        <NavLink
          to="#projects"
          smooth
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Projects
        </NavLink>
        <NavLink
          to="#blogs"
          smooth
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Blogs
        </NavLink>
      </NavContainer>
    </motion.div>
  );
};

export default Navbar;
