import React from "react";
// import { akikoFace } from "../Images/akikoface.jpg";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Blogs from "./Blogs";
import { motion } from "framer-motion";

import {
  Container,
  NameHeader,
  WelcomeHeader,
  ProfileFaceImg,
  SocialsContainer,
  SocalIcons,
} from "../Styles-Components/HomeStyles";
const Home = ({ blogs, profile }) => {
  return (
    <>
      <Container id="home">
        <Navbar />
        <ProfileFaceImg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        ></ProfileFaceImg>
        <div className="home-container">
          <NameHeader
            color="black"
            initial={{ opacity: 0 }}
            animate={{
              x: "28rem",
              y: "-26rem",
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
          >
            Akiko Green
          </NameHeader>
          <WelcomeHeader
            color="black"
            as={motion.h4}
            initial={{ opacity: 0 }}
            animate={{
              x: "3rem",
              y: "-21rem",
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 2,
            }}
          >
            Full-Stack Developer
          </WelcomeHeader>
        </div>{" "}
        <SocialsContainer>
          <div>Sneak a peak at my:</div>
          <SocalIcons></SocalIcons>
        </SocialsContainer>
      </Container>
      <About />
      <Projects />
      <Blogs blogs={blogs} profile={profile} />
      {/*<Contact /> */}
    </>
  );
};

export default Home;
