import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
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
        {/* <NameHeader>Akiko Green!</Nah1
h1meHeader>*/}
        <motion.p
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
          }}>
         Akiko Green
        </motion.p>

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
          }}>
        Welcome To My Portfolio
        </motion.p>
        {/**<Contact /> */}
      </Container>
    </>
  );
};

export default Home;

///<QuoteContainer>
//   <Quote>
//   {/*create a quotes generator here for fun*/}
//   </Quote>
// </QuoteContainer>
