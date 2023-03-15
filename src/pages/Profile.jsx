import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Container from "../components/Container";
import ProfileContent from "../Sections/ProfileContent";
import ScrollButton from "../components/ScrollButton";

export default function Profile() {
  return (
    <div>
      <Container>
        <Header />
        <ProfileContent />
        <Footer />
        <ScrollButton />
      </Container>
    </div>
  );
}
