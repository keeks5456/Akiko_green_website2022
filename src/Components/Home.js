import React from "react";
import Navbar from "./Navbar";
// import Contact from "./Contact";
// import Projects from "./Projects";
import Projects2 from "./Projects2";
// import About from "./About";
import Blogs from "./Blogs";
import { motion } from "framer-motion";

//socials icons
import { socialIcons } from "../Utilities/ProjectData";

import {
  Container,
  NameHeader,
  WelcomeHeader,
  ProfileFaceImg,
  AboutInfo,
  AboutInfoContainer,
  SocialsContainer,
  SocalIcons,
} from "../Styles-Components/HomeStyles";
const Home = ({ blogs, profile }) => {
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
    <>
      <Container id="home">
        <Navbar />
        <ProfileFaceImg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        ></ProfileFaceImg>
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
            x: "31rem",
            y: "-25rem",
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

        <AboutInfoContainer>
          <AboutInfo>
            A San Francisco State University psychology major, working as a
            barista local cafes. To a hungry, passionate, and determine Full
            Stacks Engineer. I told myself years ago that working in tech were
            for the smart, successful and rich individuals. I thought psychology
            was my true passion. Two years later, molding myself to be a POC woman in tech,
             ready to take on all the cchallenges that come my way. 
          </AboutInfo>
        </AboutInfoContainer>


          <SocialsContainer>
            <div>Sneak a peak at my:</div>
            {displayIcons()}
          </SocialsContainer>
      </Container>

      <Projects2 />
      {/*<Projects /> */}
      <Blogs blogs={blogs} profile={profile} />
      {/*<Contact /> */}
    </>
  );
};

export default Home;
