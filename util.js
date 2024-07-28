let drawFillRect = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
};

function drawLineSegment (points, color, lineWidth) {
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
    ctx.lineTo(points[2].x, points[2].y)
    ctx.stroke();
}

function drawText(px, py, text, color) {
    ctx.font = "35px Arial bold";
    ctx.fillStyle = color;
    ctx.fillText(text, px, py);
}

function getTile(pixel) {
    return {x: Math.trunc((pixel.x - TILESIZE / 2) / TILESIZE), y: Math.trunc((pixel.y - TILESIZE / 2) / TILESIZE)}
};

function betweenTile(pixel) {
    return (Math.trunc(pixel.x - TILESIZE / 2) % TILESIZE != 0) || 
    (Math.trunc(pixel.y - TILESIZE / 2) % TILESIZE != 0);
}

function tileUp(tile) { return {x: tile.x, y: tile.y - 1}};
function tileDown(tile) { return {x: tile.x, y: tile.y + 1}};
function tileRight(tile) { return {x: tile.x + 1, y: tile.y}};
function tileLeft(tile) { return {x: tile.x - 1, y: tile.y}};
function tileLeftUp(tile) { return {x: tile.x - 1, y: tile.y - 1}};
function tileRightUp(tile) { return {x: tile.x + 1, y: tile.y - 1}};
function tileRightDown(tile) { return {x: tile.x + 1, y: tile.y + 1}};
function tileLeftDown(tile) { return {x: tile.x - 1, y: tile.y + 1}};

function getWestPoint(tile) {
    return {x: tile.x * TILESIZE, y: tile.y * TILESIZE + TILESIZE / 2};
}

function getEastPoint(tile) {
    return {x: tile.x * TILESIZE + TILESIZE, y: tile.y * TILESIZE + TILESIZE / 2};
}

function getNorthPoint(tile) {
    return {x: tile.x * TILESIZE + TILESIZE / 2, y: tile.y * TILESIZE};
}

function getSouthPoint(tile) {
    return {x: tile.x * TILESIZE + TILESIZE / 2, y: tile.y * TILESIZE + TILESIZE};
}

function getCenterPoint(tile) {
    return {x: tile.x * TILESIZE + TILESIZE / 2, y: tile.y * TILESIZE + TILESIZE / 2};
}


