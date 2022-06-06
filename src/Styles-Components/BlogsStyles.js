import styled from "styled-components";

export const BlogContainer = styled.div`
  width: auto;
  height: 100%;
  margin: 0;
  display: flex;
  flex-flow: wrap row;
  background-image: url("https://wallpapers.com/images/high/kissing-minimalist-howl-s-moving-castle-j74t9at4jjcayxdg.jpg");
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  justify-content: space-evenly;
`;

export const BlogCard = styled.div`
  padding: 0;
  display: flex;
  border: 1px solid white;
  margin: 10px 10px 10px 0;
  align-items: center;
  text-align: center;
  width: 30em;
  height: auto;
  transition: 1s ease-out;
  box-shadow: 2px 2px 2px 5px #0c779b;


  &:after {
    content: "";
    position: absolute;
    /* width: 100%;
    height: 100%; */
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
    transition: opacity 0.1s ease-in-out;
  }

  &:hover {
    transform: scale(1.2, 1.1);
    /* transition: 1s ease-in;
    box-shadow: 10px 10px 5px darkgray; */
  }

  &:hover:after{
    opacity: 1;
  }
`;

export const BlogImg = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 10em;
  width: 16em;
`;

export const CardTitle = styled.h3`
  padding-bottom: 1em;
  font-family: "Leckerli One", cursive;
`;

export const AnchorTag = styled.a`
  color: black;
  margin-bottom: 1em;
  transition: all 1s ease-out;

  &:hover {
    transition: all 1s ease-in-out;
    color: #005f73;
  }
`;
