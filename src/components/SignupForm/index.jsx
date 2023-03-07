import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FormBox from "../FormBox";
import Input from "../Input";
import SubmitButton from "../SubmitButton";

const FormH1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  font-family: Rza, Rza-fallback;
`;

const OR = styled.p`
  width: fit-content;
  margin: 35px auto;
  color: #606060;
  position: relative;
  font-weight: 700;
  & a {
    color: rgb(16 138 0);
  }
`;

export default function SignUpForm() {
  return (
    <FormBox>
      <FormH1>Sign up to find work you love</FormH1>
      <Input type="text" />
      <Input type="email" />
      <Input type="password" />
      <SubmitButton value="Sign Up" />
      <OR>
        Already have an account? <NavLink to="/login">Log In</NavLink>
      </OR>
    </FormBox>
  );
}
