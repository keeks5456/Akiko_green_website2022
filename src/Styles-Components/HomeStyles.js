import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  border: 2px solid black;
  background-image: url("https://www.outfrontmedia.com/-/media/images/ofm/markets/san-francisco/san-francisco-hero.jpg");
  /* background-image:url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstefanieshank.tumblr.com%2Fpost%2F149091707244%2Fbubbles-blog-insta&psig=AOvVaw17me6i0v6wlrEazOzBBUvR&ust=1651097477721000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjY-NjgsvcCFQAAAAAdAAAAABAv") ; */
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;

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
  font-size: 35px;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: end;
  -webkit-text-stroke: 2px white;
`;
