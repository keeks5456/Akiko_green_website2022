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
            <br />A software Engineer powered by Philz Tea & Coffee.
          </AboutInfo>
        </AboutInfoContainer>
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
