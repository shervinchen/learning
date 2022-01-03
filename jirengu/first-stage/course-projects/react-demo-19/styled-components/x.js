import React from "react";
import Topbar from "./topbar";
import styled from "styled-components";

const Title = styled.div`
  color: red;
  font-size: 20px;
`;

export default function X() {
  return (
    <div>
      <Topbar theme="red" />
      <Title>title1</Title>
    </div>
  );
}
