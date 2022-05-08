const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 100;
ctx.lineJoin = "round";
ctx.lineCap = "round";
//? You can play around with other blend modes with:
// ctx.globalCompositeOperation = "multiply";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 221;
let saturation = 98;
let lightness = 67;
let increaseLineWidth = true;

function draw(event) {
  if (!isDrawing) {
    return;
  }

  ctx.beginPath();
  ctx.strokeStyle = `hsl(${hue}deg ${saturation}% ${lightness}%)`;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();

  hue = hue + 1 === 360 ? 0 : hue + 1;
  [lastX, lastY] = [event.offsetX, event.offsetY];

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    increaseLineWidth = !increaseLineWidth;
  }
  ctx.lineWidth = increaseLineWidth ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (event) => {
  [lastX, lastY] = [event.offsetX, event.offsetY];
  isDrawing = true;
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});
