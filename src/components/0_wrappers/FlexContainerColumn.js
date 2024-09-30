import React from "react";

export function FlexContainerColumn({
  children,
  padding = "1rem",
  gap = "0.5rem",
}) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: padding,
    gap: gap,
    height: "100dvh",
  };

  return (
    <div style={containerStyle} className="flex-container">
      {children}
    </div>
  );
}
