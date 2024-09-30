import React from "react";

export function GridItem({
  span,
  children,
  flexDirection = "row",
  gap = "1rem",
}) {
  const itemStyle = {
    gridRow: `span ${span.rows}`,
    gridColumn: `span ${span.cols}`,
    display: "flex",
    flexDirection: flexDirection,
    gap: gap,
  };

  return <div style={itemStyle}>{children}</div>;
}
