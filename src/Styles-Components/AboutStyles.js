import styled from "styled-components";
//parent
export const AboutContainer = styled.div`
  position: relative;
  height: 100vh;
  margin-top: 3em;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("https://www.sftravel.com/sites/sftravel.prod.acquia-sites.com/files/400x250.jpg");
    background-size: cover;
    background-position: top center;
    opacity: 0.6;
  }
`;

export const AboutHeader = styled.h1`
  position: relative;
`;

export const ParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 701px;
  height: 336px;
  background-color: white;
  padding: 10px;
  border-radius: 34px;
  &:before{

    content: "";
    position: absolute;
    opacity:0.3 ;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const Paragraph = styled.p`
  position: relative;
  font-weight: bold;
  color: #000000;
`;
