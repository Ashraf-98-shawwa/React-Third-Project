import React from "react";
import styled from "styled-components";

const ContainerBox = styled.div`
  width: 95%;
  margin: auto;
`;

export default function Container({ children }) {
  return <ContainerBox>{children}</ContainerBox>;
}
