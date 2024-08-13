function drawFillRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawLineSegment(points, color, lineWidth) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
}

function drawCurve(points, color, lineWidth) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  ctx.arcTo(points[1].x, points[1].y, points[2].x, points[2].y, 10);
  ctx.lineTo(points[2].x, points[2].y);
  ctx.stroke();
}

function drawText(px, py, text, color) {
  ctx.font = "25px PressStart2P";
  ctx.fillStyle = color;
  ctx.fillText(text, px, py);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getNeighbours(tile) {
  var neighbours = [];
  if (!game.board.isWall(tile.up())) {
    neighbours.push(tile.up());
  }
  if (!game.board.isWall(tile.down())) {
    neighbours.push(tile.down());
  }
  if (!game.board.isWall(tile.left())) {
    neighbours.push(tile.left());
  }
  if (!game.board.isWall(tile.right())) {
    neighbours.push(tile.right());
  }
  return neighbours;
}

function drawFood(tile) {
  const pixel = tile.centerPixel();
  ctx.drawImage(
    spriteSheet,
    45,
    302,
    5,
    5,
    pixel.x - FOOD_SIZE / 2,
    pixel.y - FOOD_SIZE / 2,
    FOOD_SIZE,
    FOOD_SIZE,
  );
}

function drawPower(tile) {
  const pixel = tile.centerPixel();
  ctx.drawImage(
    spriteSheet,
    8,
    296,
    17,
    17,
    pixel.x - POWER_SIZE / 2,
    pixel.y - POWER_SIZE / 2,
    POWER_SIZE,
    POWER_SIZE,
  );
}
