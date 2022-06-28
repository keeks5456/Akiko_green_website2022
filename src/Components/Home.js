import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Projects from "./Projects";
import { motion } from "framer-motion";
import {
  // WelcomeBannerContainer,
  Container,
  NameHeader,
  // QuoteContainer,
  // Quote,
} from "../Styles-Components/HomeStyles";
const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <NameHeader
          as={motion.div}
          initial={{ y: -200, opacity: 0 }}
          animate={{
            x: "9rem",
            y: "1rem",
            opacity: 1,
            fontSize: "73px",
          }}
          transition={{
            delay: 1,
            x: { type: "spring" },
            default: { duration: 2 },
          }}
        >
          Akiko Green!
        </NameHeader>

        <motion.p
          initial={{ y: -200, opacity: 0 }}
          animate={{
            x: "9rem",
            y: "1rem",
            opacity: 1,
            fontSize: "73px",
          }}
          transition={{
            delay: 3,
            x: { type: "spring" },
            default: { duration: 2 },
          }}
        >
          Welcome To My Portfolio
        </motion.p>
        {/**<Contact /> */}
      </Container>
      <Projects />
    </>
  );
};

export default Home;

///<QuoteContainer>
//   <Quote>
//   {/*create a quotes generator here for fun*/}
//   </Quote>
// </QuoteContainer>
