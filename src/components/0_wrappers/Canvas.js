import React from "react";

export function Canvas({ children, padding = "1rem", gap = "0.5rem" }) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: padding,
    gap: gap,
    height: "100",
  };

  return <canvas></canvas>;
}
