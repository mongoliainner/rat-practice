import React from "react";

export function FlexContainerColumn({
  children,
  padding = "1rem",
  gap = "0.5rem",
  backgroundColor = "#222",
  alignItems = "center",
}) {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: padding,
    gap: gap,
    backgroundColor: backgroundColor,
    height: "100dvh",
    alignItems: alignItems,
  };

  return (
    <div style={containerStyle} className="flex-container">
      {children}
    </div>
  );
}
