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

    context.beginPath();
    context.arc(300, 300, 50, 0, Math.PI * 2);
    context.fillStyle = "green";
    context.fill();
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
  };

  return (
    <div style={containerStyle}>
      <canvas ref={canvasRef}></canvas>
      {children}
    </div>
  );
}
