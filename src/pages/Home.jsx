import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import HomeContent from "../Sections/HomeContent";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <HomeContent />
        
      </Container>
    </div>
  );
}
