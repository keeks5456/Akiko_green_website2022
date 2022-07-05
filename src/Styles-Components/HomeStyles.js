import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  height: 100%;
  margin: 0;
  background: #28282b;
border-bottom: 2px solid blue ;
  @media (max-width: 600px) {
    background-image: url("data:image/png;base64,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");
    /* change background */
  }
`;

export const NameHeader = styled.h1`
  display: inline-block;
  font-family: "Inknut Antiqua", serif;
  color: ${(props) => props.color || "white"};
  font-size: 59px;
  letter-spacing: 5px;

  @media (max-width: 600px) {
    margin-top: 63px;
    margin-left: 3em;
    font-size: 35px;
  }
`;

export const WelcomeHeader = styled(NameHeader)`
  font-size: 50px;
`;
