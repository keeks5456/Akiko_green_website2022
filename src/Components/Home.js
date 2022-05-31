import React from "react";
import Navbar from "./Navbar";
import {
  WelcomeBannerContainer,
  Container,
  NameHeader,
  QuoteContainer,
  Quote,
  // BackgroundImage,
} from "../Styles-Components/HomeStyles";
const Home = () => {
  return (
    <>
    <Container >
    <Navbar />
      <NameHeader>Akiko Green</NameHeader>
      <WelcomeBannerContainer>
        <h2>Welcome To My Website</h2>
      </WelcomeBannerContainer>
      <QuoteContainer>
        <Quote>A Soft Woman Is A Wolf Caught In Meditation</Quote>
      </QuoteContainer>
    </Container>
    </>
  );
};

export default Home;

/*have the welcome banner bouncing or floating?*/
