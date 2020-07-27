import React from "react";
import styled from "styled-components";

const Container = styled.div`
  textarea {
    width: 70vw;
    position: absolute;
    left: 15%;
    right: 15%;
    height: 30vh;
    outline: none;
    overflow: auto;
  }
`;

export default function Editor(props) {
  return (
    <Container>
      <textarea
        type="text-field"
        id="editor"
        onChange={props.onChange}
        value={props.value}
      />
    </Container>
  );
}
