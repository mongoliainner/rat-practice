import React from "react";

export function Grid({ rows, cols, children }) {
  const gridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gap: "1rem",
    height: "100%",
  };

  return <div style={gridStyle}>{children}</div>;
}
