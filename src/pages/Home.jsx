import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import HomeContent from "../Sections/HomeContent";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <HomeContent />
        <ScrollButton/>
        <Footer />
      </Container>
    </div>
  );
}
