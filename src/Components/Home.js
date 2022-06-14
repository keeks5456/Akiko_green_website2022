import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
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
      <NameHeader>Akiko Green!</NameHeader>
      <NameHeader></NameHeader>
      <Contact />
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