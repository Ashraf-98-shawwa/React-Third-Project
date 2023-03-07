import React from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import SignUpForm from "../components/SignupForm";

export default function SignUp() {
  return (
    <div>
      <Container>
        <Header signup={true} />
        <SignUpForm />
      </Container>
    </div>
  );
}
