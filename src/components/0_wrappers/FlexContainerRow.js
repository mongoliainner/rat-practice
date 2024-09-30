import React from "react";

export function FlexContainerRow({
  children,
  padding = "1rem",
  gap = "0.5rem",
  backgroundColor = "#222",
  alignItems = "center",
}) {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    padding: padding,
    gap: gap,
    height: "100dvh",
    backgroundColor: backgroundColor,
    alignItems: alignItems,
  };

  return (
    <div style={containerStyle} className="flex-container">
      {children}
    </div>
  );
}
