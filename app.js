let canvas = document.getElementById('gameStage');
let ctx = canvas.getContext('2d');

setInterval(draw, 10);

let x = canvas.width / 2;
let y = canvas.height  - 30;

function draw() {
  // ball
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
