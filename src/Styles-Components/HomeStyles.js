import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  border: 2px solid black;
  background-image: url("https://thumbs.dreamstime.com/b/realistic-water-bubbles-transparent-gradient-pastel-color-background-abstract-image-178130326.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  /* background-color: white; */

  /* background-image:${(props) =>
    props.backgroundImage ||
    "https://www.outfrontmedia.com/-/media/images/ofm/markets/san-francisco/san-francisco-hero.jpg"};  */
`;

export const NameHeader = styled.h1`
  /* border: 3px solid #CA8F36; */
  -webkit-text-stroke: 2px #ca8f36;
  font-family: "Leckerli One" cursive;
  font-size: 400;
  font-size: 4em;
`;

export const WelcomeBannerContainer = styled.div`
  text-align: center;
  -webkit-text-stroke: 2px #ca8f36;
  font-family: "Leckerli One" cursive;
  font-size: 40px;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: end;
  /* -webkit-text-stroke: 2px black; */
`;

export const Quote = styled.p`
  font-size:20px ;
`