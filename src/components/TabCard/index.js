import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { useJobContext } from "../../context/jobContext";
import styled from "styled-components";

import saved from "../../Images/saved.png";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export default function TabCard(props) {
  const { state } = useJobContext();
  const [BestMatches, setBestMatches] = useState([]);
  const [SavedJobs, setSavedJobs] = useState(state.jobs);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:3004/jobs?_sort=id&_order=desc`
        );

        if (res) {
          setBestMatches(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (props.bestMatches) {
    return (
      <div>
        <p>{props.title}</p>
        {BestMatches?.map((detail) => (
          <JobCard
            key={detail.id}
            id={detail.id}
            title={detail.title}
            hourlyRate={detail.hourlyRate}
            expertiseLevel={detail.expertiseLevel}
            estimatedTime={detail.estimatedTime}
            hoursPerWeek={detail.hoursPerWeek}
            budget={detail.budget}
            posted={detail.posted}
            description={detail.description}
            proposals={detail.proposals}
            amountSpent={detail.amountSpent}
            location={detail.location}
            technologies={detail.technologies}
            detail={detail}
          />
        ))}
      </div>
    );
  }

  if (props.mostRecent) {
    return (
      <div>
        <p>{props.title}</p>
        {BestMatches?.map((detail) => (
          <JobCard
            key={detail.id}
            id={detail.id}
            title={detail.title}
            hourlyRate={detail.hourlyRate}
            expertiseLevel={detail.expertiseLevel}
            estimatedTime={detail.estimatedTime}
            hoursPerWeek={detail.hoursPerWeek}
            budget={detail.budget}
            posted={detail.posted}
            description={detail.description}
            proposals={detail.proposals}
            amountSpent={detail.amountSpent}
            location={detail.location}
            technologies={detail.technologies}
          />
        ))}
      </div>
    );
  }

  if (props.savedJobs) {
    return (
      <div>
        {SavedJobs.length > 0 ? (
          SavedJobs?.map((detail) => (
            <JobCard
              key={detail.id}
              id={detail.id}
              title={detail.title}
              hourlyRate={detail.hourlyRate}
              expertiseLevel={detail.expertiseLevel}
              estimatedTime={detail.estimatedTime}
              hoursPerWeek={detail.hoursPerWeek}
              budget={detail.budget}
              posted={detail.posted}
              description={detail.description}
              proposals={detail.proposals}
              amountSpent={detail.amountSpent}
              location={detail.location}
              technologies={detail.technologies}
            />
          ))
        ) : (
          <>
            <Center>
              <img width="200px" src={saved} alt="saved" />
              <p>{props.title}</p>
            </Center>
          </>
        )}
      </div>
    );
  }
}
