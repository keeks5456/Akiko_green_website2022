import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
//styles
import { NavContainer } from "../Styles-Components/NavbarStyles";
const Navbar = () => {
  // const [toggleStyles, setToggleStyles] = useState(false)

  // const styledComponentToggle = () =>{
  //   setToggleStyles(true)
  // }

  const variants = {
    hidden: { opacity: 0.3 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      animate={{ scale: 1}}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Projects
        </NavLink>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Blogs
        </NavLink>
    
      </NavContainer>
    </motion.div>
  );
};

export default Navbar;
