import React from "react";
import styled from "styled-components";

const Container = styled.div`
  color: whitesmoke;
  background-color: #556a83;
  position: absolute;
  top: 350px;
  width: 90vw;
  left: 5%;
  right: 5%;
  padding: 5px;
  height: 80vh;
  font-size: 16px;
  overflow: auto;
`;

export default function Preview(props) {
  return <Container id="preview" dangerouslySetInnerHTML={props.value} />;
}
