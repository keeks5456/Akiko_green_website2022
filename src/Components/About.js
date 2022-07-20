import React from "react";
import {
  AboutContainer,
  ImageContainer,
  ProfileImage,
  AboutInfoContainer,
  AboutInfo,
} from "../Styles-Components/AboutStyles";

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
            <br />
            A software Engineer powered by Philz Tea & Coffee.
            <br />
            On my down time, I love to read, go indoor bouldering, explore recipes on youtube or dog sit :)
          </AboutInfo>
        </AboutInfoContainer>
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
