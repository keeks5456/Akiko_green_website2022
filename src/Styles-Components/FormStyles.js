import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items:center ; */
  background-color: #005f73;
  height: 100vh;
`;

export const FormHeader = styled.h1`
  background-color: #005f73;
  font-family: "Leckerli One", cursive;
`;

export const FormInput = styled.input`
  margin: 10px 0 10px 2px;
  height: 3em;
  width: 17em;
  border-radius: 10px;
  text-align: center;
  outline: none;
`;

export const FormTextarea = styled.textarea`
  margin: 10px 0 10px 2px;
  height: 2em;
  border-radius: 10px;
  text-align: center;
  outline: none;
  height: 30%;
  width: 27%;
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
