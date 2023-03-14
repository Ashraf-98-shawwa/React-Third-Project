import React, { useEffect, useState } from 'react'
import axios from "axios";
import SkillsCard from '../components/SkillsCard';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        {filterredJobs?.map((item, index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            <h2>{item.hourlyRate}</h2>
            <p>{item.description}</p>
            <SkillsCard technologiesOfItem={item?.technologies} />
          </div>
        ))}
        <Footer />
      </Container>
      ;
    </>
  );
}
