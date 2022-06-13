import styled from "styled-components";


export const FormHeader = styled.h3`
  font-family: "Leckerli One", cursive;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction:column ;
  justify-content:center ;
  text-align: center;
  width: 13em;
  padding:15px ;
  border:1px solid white ;
`;
export const FormInput = styled.input`
  margin: 10px 0 10px 2px;
  height: 2em;
  width: 14em;
  border-radius: 4px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  border-top:none;
  background:transparent ;

  &:focus {
    background: transparent;
  }
  &:active {
    background: transparent;
  }
`;

export const FormTextarea = styled.textarea`
  margin: 10px 0 10px 2px;
  height: 5em;
  border-radius: 10px;
  text-align: center;
  outline: none;
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 2px solid black;
  border-top:none;

  background:transparent ;

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
