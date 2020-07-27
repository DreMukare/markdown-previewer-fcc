import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: whitesmoke;
  position: absolute;
  top: 0;
  width: 100%;
  height: 60px;
  text-align: center;
  z-index: 5;
`;
const Welcome = styled.h1`
  margin: 10px;
  padding: 0;
  color: #141e30;
`;

export default function Header() {
  return (
    <Container>
      <Welcome>Welcome To My Markdown Previewer</Welcome>
    </Container>
  );
}
