import styled from "styled-components";

export const BlogContainer = styled.div`
  box-sizing: content-box;
  width: auto;
  height: 100%;
  margin: 0;
  display: flex;
  flex-flow: wrap;
  align-items: flex-start;
  justify-content: space-around;
  background-color: #28282b;

`;

export const BlogCard = styled.div`
  width: 100%;
  padding-bottom: 0.5em;
  /* important */
  min-height: 100%;

  display: flex;
  border-bottom: 1px solid #e5e5e5;
  margin: 10px 10px 10px 0;
  align-items: center;
  transition: 1s ease-out;


  &:hover {
    transform: scale(1.1);
    /* transition: 1s ease-in;
    box-shadow: 10px 10px 5px darkgray; */
  }

  &:hover:after {
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
  color: white;
  margin-bottom: 1em;
  transition: all 1s ease-out;

  &:hover {
    transition: all 1s ease-in-out;
    color: #005f73;
  }
`;
