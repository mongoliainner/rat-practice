import React, { useRef, useEffect } from "react";

export function Canvas({ children, padding = "0rem", gap = "0.5rem" }) {
  const canvasRef = useRef(null);

  const drawOnCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;

    context.fillStyle = "blue";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    drawOnCanvas();
  }, []);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: padding,
    gap: gap,
    height: "100vh",
    width: "100%",
  };

  const canvasWrapperStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "1rem",
    overflow: "hidden",
    borderWidth: "0.05rem",
    borderColor: "#FFF",
    boxShadow:
      "0px 0px 0.5px 2px rgba(255, 255, 255, 0.25), 0px 0px 4px 8px rgba(255, 255, 255, 0.05)",
  };

  return (
    <div style={containerStyle}>
      <div style={canvasWrapperStyle}>
        <canvas ref={canvasRef}></canvas>
      </div>
      {children}
    </div>
  );
}
