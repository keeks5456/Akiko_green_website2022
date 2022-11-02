import React from "react";
import Navbar from "./Navbar";
// import Contact from "./Contact";
import Projects2 from "./Projects2";
import Blogs from "./Blogs";
import { motion } from "framer-motion";
import {
  Container,
  NameHeader,
  WelcomeHeader,
  ProfileFaceImg,
  AboutInfo,
  AboutInfoContainer
} from "../Styles-Components/HomeStyles";

const Home = ({ blogs, profile }) => {

  return (
    <>
      <Navbar />
      <Container id="home">
        <NameHeader>Akiko Green</NameHeader>
        <WelcomeHeader>Full-Stack Developer</WelcomeHeader>
        <ProfileFaceImg></ProfileFaceImg>

        <AboutInfoContainer>
          <AboutInfo>
            A San Francisco State University psychology major, working as a
            barista local cafes. To a hungry, passionate, and determine Full
            Stacks Engineer. I told myself years ago that working in tech were
            for the smart, successful and rich individuals. I thought psychology
            was my true passion. Two years later, molding myself to be a POC
            woman in tech, ready to take on all the cchallenges that come my
            way.
          </AboutInfo>
        </AboutInfoContainer>
      </Container>

      <Projects2 />
      <Blogs blogs={blogs} profile={profile} />
      {/*<Contact /> */}
    </>
  );
};

export default Home;
