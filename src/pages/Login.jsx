import React from "react";
import Container from "../components/Container";
import FormFooter from "../components/FormFooter";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <Container>
        <Header login />
        <LoginForm />
        <FormFooter />
      </Container>
    </div>
  );
}
