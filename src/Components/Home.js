import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
import { motion } from "framer-motion";
import {
  Container,
  NameHeader,
  WelcomeHeader,
} from "../Styles-Components/HomeStyles";
const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <NameHeader
        color="black"
          as={motion.h1}
          initial={{ y: -200, opacity: 0 }}
          animate={{
            x: "9rem",
            y: "6rem",
            opacity: 1,

          }}
          transition={{
            delay: 1,
            default: { duration: 2 },
          }}
        >
          Akiko Green!
        </NameHeader>
        <WelcomeHeader
          color="black"
          as={motion.h4}
          initial={{ y: -300, opacity: 0 }}
          animate={{
            x: "19rem",
            y: "4rem",
            opacity: 1,
          }}
          transition={{
            delay: 3,
            default: { duration: 2 },
          }}
        >
          Welcome To My Portfolio
        </WelcomeHeader>
      </Container>
      <Projects />
    </>
  );
};

export default Home;
