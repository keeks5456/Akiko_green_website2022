import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import {
  AboutContainer,
  ImageContainer,
  ProfileImage,
  AboutInfoContainer,
  AboutInfo,
} from "../Styles-Components/AboutStyles";

import { aboutData } from "../Utilities/AboutData";

const About = () => {
  return (
    <AboutContainer id="about">
      <ImageContainer>
        <ProfileImage></ProfileImage>
        <ProfileImage></ProfileImage>
        <ProfileImage></ProfileImage>
        <AboutInfoContainer>
          <AboutInfo>
            A san Francisco Native.
            <br />
            From Solving problems while bouldering
            <br />
            To solving errors in code.
            <br />A software Engineer powered by Philz Tea & Coffee.
          </AboutInfo>
        </AboutInfoContainer>
      </ImageContainer>

      {/* <ThoughtBox>
        <div className="bubble">
       
         <button onClick={() => handleClick()}>Next Info</button>
        </div>
        <div className="pointer"></div>
      </ThoughtBox>*/}
    </AboutContainer>
  );
};

export default About;
