import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import CanvasCard from "../components/CanvasCard";

const JobDetails = () => {
  const { id } = useParams();
  const [jobdetails, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3004/jobs/${id}`);
        if (res) {
          setJobDetails(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  return (
    <div>
      <Container>
        <Header />
        <CanvasCard detail={jobdetails} />
        <Footer />
      </Container>
    </div>
  );
};

export default JobDetails;
