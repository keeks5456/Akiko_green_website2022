import React from "react";
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

} from "../Styles-Components/HomeStyles";
const Home = ({ blogs, profile}) => {



  return (
    <>
      <Container id="home">
      
        <NameHeader
          color="black"
          initial={{ x: "-3rem", y: "-8rem", opacity: 0 }}
          animate={{
            x: "4rem",
            y: "2rem",
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 100, delay:1 }}
        >
          Akiko Green
        </NameHeader>
        <WelcomeHeader
          color="black"
          as={motion.h4}
          initial={{ x: "-18rem", y: "8rem", opacity: 0 }}
          animate={{
            x: "-18rem",
            y: "8rem",
            opacity: 1,
          }}
          transition={{
            delay: 2,
          }}
        >
          Full-Stack Developer
        </WelcomeHeader>
      
        <Navbar />
      </Container>
      <About />
      <Projects />
      <Blogs blogs={blogs} profile={profile}/>
      {/*<Contact /> */}
    </>
  );
};

export default Home;
