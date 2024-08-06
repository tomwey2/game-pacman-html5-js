let drawFillRect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

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
  ctx.font = "35px Arial bold";
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
  if (!this.board.isWall(tile.up())) {
    neighbours.push(tile.up());
  }
  if (!this.board.isWall(tile.down())) {
    neighbours.push(tile.down());
  }
  if (!this.board.isWall(tile.left())) {
    neighbours.push(tile.left());
  }
  if (!this.board.isWall(tile.right())) {
    neighbours.push(tile.right());
  }
  return neighbours;
}

