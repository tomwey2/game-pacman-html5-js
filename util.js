let drawFillRect = (x, y, width, height, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
};

function drawLineSegment (points, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i][0], points[i][1]);
        }
    ctx.stroke();
}

function drawCurve(points, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    //ctx.lineTo(points[1][0], points[1][1]);
    ctx.arcTo(points[1][0], points[1][1], points[2][0], points[2][1], 10);
    ctx.lineTo(points[2][0], points[2][1])
    ctx.stroke();
}

function drawText(x, y, text, color) {
    let px = x * TILESIZE;
    let py = y * TILESIZE;
    ctx.font = "30px Arial";
    ctx.fillStyle = color;
    ctx.fillText(text, px, py);
}