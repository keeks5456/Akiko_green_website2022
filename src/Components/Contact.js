import React from "react";

import {
  FormContainer,
  FormInput,
  FormHeader,
  FormTextarea,
  SubmitButton,
} from "../Styles-Components/FormStyles";
const Contact = () => {
  return (
    <>
      <FormHeader>Contact me</FormHeader>
      <FormContainer>
        <form>
          <p className="form-text">Name:</p>
          <FormInput
            type="text"
            name="name"
            placeholder="Full Name"
          ></FormInput>
          <br />
          <p className="form-text">Email:</p>
          <FormInput type="text" name="Email" placeholder="Email"></FormInput>
          <br />
          <p className="form-text">Subject:</p>
          <FormInput
            type="text"
            name="Subject"
            placeholder="Subject"
          ></FormInput>
          <br />
          <p className="form-text">Message:</p>
          <FormTextarea
            name="message"
            placeholder="Please add message here... :)"
          ></FormTextarea>
          <br />
          <SubmitButton type="submit" value="Send">Send Email</SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Contact;
