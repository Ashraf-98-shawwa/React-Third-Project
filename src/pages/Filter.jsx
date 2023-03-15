import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollButton from "../components/ScrollButton";
import FilterContent from "../Sections/FilterContent";

export default function Filter() {
  const [filterredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    (async () => {
      const q = localStorage.getItem("search");

      try {
        const res = await axios.get(
          `http://localhost:3004/jobs?title_like=${q}`
        );

        if (res) {
          setFilteredJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <FilterContent jobs={filterredJobs} />
        <Footer />
        <ScrollButton />
      </Container>
      ;
    </>
  );
}
