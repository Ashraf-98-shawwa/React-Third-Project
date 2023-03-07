import React from "react";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <Container>
        <Header login />
        <LoginForm/>
        <Footer />
      </Container>
    </div>
  );
}
