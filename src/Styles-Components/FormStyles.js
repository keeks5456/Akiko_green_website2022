import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-image: url("https://animesher.com/orig/1/153/1538/15387/animesher.com_minimalist-anime-boy-howl-1538759.png");
  height: 100vh;
`;

export const FormHeader = styled.h1`
  text-align: center;
  font-family: "Leckerli One", cursive;
  font-size: 63px;
  margin-right: 3em;
`;

export const FormBox = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 23em;
  width: 0%;
  object-fit: fill;
  transform: translate(10px, 20%);
`;
export const FormInput = styled.input`
  margin: 10px 0 10px 2px;
  height: 3em;
  width: 31em;
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  border-top: 2px solid black;

  padding-left: 10px;
  /* background:transparent ; */

  &:focus {
    background: transparent;
  }
  &:active {
    background: transparent;
  }
`;

export const FormTextarea = styled.textarea`
  margin: 10px 0 10px 2px;
  height: 2em;
  border-radius: 10px;
  text-align: center;
  outline: none;
  height: 30%;
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 2px solid black;
  border-top: 2px solid black;

  /* background:transparent ; */

  &:focus {
    background: transparent;
  }
  &:active {
    background: transparent;
  }
`;

export const SubmitButton = styled.button`
  padding: 9px;
  height: 37px;
  width: 11em;
  border-radius: 3em;
  background-color: whitesmoke;
  border: none;
  font-weight: bolder;
  font-size: 1em;

  &:hover {
    box-shadow: 0 0 19px rgb(9 0 0);
    color: #005f73;
  }
`;
