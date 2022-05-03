import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: auto;
  margin: 0;
  background-color:#005f73 ;
  /* background-image: url("https://thumbs.dreamstime.com/b/realistic-water-bubbles-transparent-gradient-pastel-color-background-abstract-image-178130326.jpg"); */
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;

  /* background-image:${(props) =>
    props.backgroundImage ||
    "https://www.outfrontmedia.com/-/media/images/ofm/markets/san-francisco/san-francisco-hero.jpg"};  */
`;

export const NameHeader = styled.h1`
margin-top:0 ;
  -webkit-text-stroke: 2px white;
  font-family: "Leckerli One" cursive;
  font-size: 400;
  font-size: 4em;
`;

export const WelcomeBannerContainer = styled.div`
  text-align: center;
  -webkit-text-stroke: 2px white;
  font-family: "Leckerli One" cursive;
  font-size: 40px;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const Quote = styled.p`
  font-size: 20px;
`;
