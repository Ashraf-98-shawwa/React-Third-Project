import React from "react";
import styled from "styled-components";
import Jobs from "../../components/Jobs";
import SearchInput from "../../components/SearchInput";
import WelcomingBanner from "../../components/WelcomingBanner";

const HomeContentBox = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 30px;
  display: flex;
  gap: 35px;
`;

const LeftContent = styled.div`
  width: 75%;
`;

const RightContent = styled.div`
  width: 25%;
`;
export default function HomeContent() {
  return (
    <HomeContentBox>
      <LeftContent>
              <WelcomingBanner />
              <SearchInput />
              <Jobs/>
      </LeftContent>
      <RightContent>2</RightContent>
    </HomeContentBox>
  );
}
