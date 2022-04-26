import React from "react";
//stlesw
import {
  WelcomeBannerContainer,
  Container,
  NameHeader,
  QuoteContainer,
  // BackgroundImage,
} from "../Styles-Components/HomeStyles";
const Home = () => {
  return (
    <Container >
      <NameHeader>Akiko Green</NameHeader>
      <WelcomeBannerContainer>
        <h2>Welcome To My Website</h2>
      </WelcomeBannerContainer>
      <QuoteContainer>
        <p>A Soft Woman Is A Wolf Caught In Meditation</p>
      </QuoteContainer>
    </Container>
  );
};

export default Home;

/*have the welcome banner bouncing or floating?*/
