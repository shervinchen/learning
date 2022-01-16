/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

export default function X(props) {
  const theme = props.theme;
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        background: theme,
        padding: 10
      }}
    >
      <div
        css={{
          display: "inline-block",
          color: "red",
          fontSize: 20,
          white: 40,
          height: 40,
          background: "grey"
        }}
      >
        logo
      </div>
      <nav
        css={{
          width: 200,
          height: 30,
          background: "#333",
          marginLeft: 10
        }}
      />
    </div>
  );
}
