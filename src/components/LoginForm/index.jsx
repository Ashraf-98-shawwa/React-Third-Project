import React from "react";
import styled from "styled-components";
import FormBox from "../FormBox";
import Input from "../Input";
import SubmitButton from "../SubmitButton";
import SwitchButton from "../SwitchButton";

const FormH1 = styled.h1`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const OR = styled.p`
  width: fit-content;
  margin: 35px auto;
  color: #606060;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    background-color: #aeadad;
    position: absolute;
    top: 50%;
    left: -30%;
  }
  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 1px;
    position: absolute;
    background-color: #aeadad;
    top: 50%;
    right: -30%;
  }
`;

export default function LoginForm() {
  return (
    <FormBox>
      <FormH1>Log in to Upwork</FormH1>
      <Input type="email" />
      <Input type="password" />
      <SubmitButton />
      <OR> Don't have an Upwork account?</OR>
      <SwitchButton value="Sign Up" />
    </FormBox>
  );
}
