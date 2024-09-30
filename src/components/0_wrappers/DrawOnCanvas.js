export const drawOnCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");

  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;

  context.fillStyle = "blue";
  context.fillRect(50, 50, 150, 100);

  context.beginPath();
  context.arc(300, 300, 50, 0, Math.PI * 2);
  context.fillStyle = "green";
  context.fill();
};
