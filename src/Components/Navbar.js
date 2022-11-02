import React from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import { motion } from "framer-motion";
//socials icons
import { socialIcons } from "../Utilities/ProjectData";
//styles
import {
  NavContainer,
  SocialsContainer,
  SocalIcons,
} from "../Styles-Components/NavbarStyles";
const Navbar = () => {
  const displayIcons = () => {
    return socialIcons.map((icon) => (
      <>
        <SocalIcons className="icon" key={icon.id} color={icon.color}>
          {icon.social}
        </SocalIcons>
      </>
    ));
  };

  return (
    <div>
    <NavContainer>
    <SocialsContainer>
      {displayIcons()}
    </SocialsContainer>
        <NavLink
          to="#home"
          smooth
          className={({ isActive }) => (isActive ? "active" : "main-nav")}
        >
          Home
        </NavLink>

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
    </div>
  );
};

export default Navbar;
