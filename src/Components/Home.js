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
      <Container>
        <Navbar />
        <NameHeader>Akiko Green</NameHeader>
        <QuoteContainer>
          <Quote> idea for quotes generator NameHeader</Quote>
        </QuoteContainer>
      </Container>
    </>
  );
};

export default Home;

/*have the welcome banner bouncing or floating?*/
