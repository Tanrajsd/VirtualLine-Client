import React from "react";

export default function Header() {
  return (
    <header>
      <h1 style={headerStyle}>Virtual Line</h1>
    </header>
  );
}

const headerStyle = {
  background: "#4169e1",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};
