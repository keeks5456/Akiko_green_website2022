import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormContainer,
  FormInput,
  FormHeader,
  FormTextarea,
  SubmitButton,
} from "../Styles-Components/FormStyles";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bwunyuz",
        "template_7dlts5n",
        form.current,
        "lKv9MJfb2VzA7s1cX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <FormHeader>Contact me</FormHeader>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
          <p className="form-text">Name:</p>
          <FormInput
            type="text"
            name="user_name"
            placeholder="Full Name"
          ></FormInput>
          <br />
          <p className="form-text">Email:</p>
          <FormInput
            type="email"
            name="user_email"
            placeholder="Email"
          ></FormInput>
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
          <SubmitButton type="submit" value="Send">
            Send Email
          </SubmitButton>
        </form>
      </FormContainer>
    </>
  );
};

export default Contact;
