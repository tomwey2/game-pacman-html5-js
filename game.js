var board = new Board();
var pacman = new Pacman(14, 26, TILESPEED, board);
var lives = 5;
var highscore = 1200;
var score = 0;

function addScore(value) {
    score += value;
    if (score > highscore) {
        highscore = score;
    }
}

function gameloop() {
    update();
    draw();
}

function update() {
    // todo
    pacman.move();
}

function drawScore() {
    drawText(100, 40, "1UP", "white");
    drawText(100, 80, parseInt(score), "white");
    drawText(350, 40, "HIGH  SCORE", "white");
    drawText(350, 80, parseInt(highscore), "white");
}

function drawLives() {
    for (var live = 0; live < lives - 1; live++) {
        var index = pacman.frameIndex.get(DIRECTION_LEFT)[1];
        ctx.drawImage(
            spriteSheet,
            index * 30 + pacman.xoffset[index], pacman.yoffset[index], 30, 30, 
            3 * TILESIZE + live * TILESIZE * 2, 34 * TILESIZE, PACMAN_SIZE, PACMAN_SIZE
        );
    }

}

function draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR)
    // todo
    board.draw();
    pacman.draw();
    drawScore();
    drawLives();
}

gameloop();

var gameInterval = setInterval(gameloop, 1500 / fps);
window.addEventListener("keydown", (event) => {
    var k = event.keyCode;

    setTimeout(() => {
        if (k == 37 || k == 65) {
            // left (A)
            pacman.nextDirection = DIRECTION_LEFT;
        } else if (k == 38 || k == 76) {
            // up (L)
            pacman.nextDirection = DIRECTION_UP;
        } else if (k == 39 || k == 68) {
            // right (D)
            pacman.nextDirection = DIRECTION_RIGHT;
        } else if (k == 40 || k == 77) {
            // down (M)
            pacman.nextDirection = DIRECTION_DOWN;
        } else if (k == 32) {
            pacman.isMoving = !pacman.isMoving;  
        }
    }, 1);
});
