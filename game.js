var board = new Board();
var pacman = new Pacman(14.4, 26, TILESIZE / 5, board);

function gameloop() {
    update();
    draw();
}

function update() {
    // todo
    pacman.move();
}

function drawScore() {
    drawText(350, 40, "HIGH  SCORE", "yellow");
}

function draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR)
    // todo
    board.draw();
    pacman.draw();
    drawScore();
}

gameloop();

var gameInterval = setInterval(gameloop, 1500 / fps);
window.addEventListener("keydown", (event) => {
    var k = event.keyCode;

    setTimeout(() => {
        if (k == 37 || k == 65) {
            // left
            pacman.nextDirection = DIRECTION_LEFT;
        } else if (k == 38 || k == 87) {
            // up
            pacman.nextDirection = DIRECTION_UP;
        } else if (k == 39 || k == 68) {
            // right
            pacman.nextDirection = DIRECTION_RIGHT;
        } else if (k == 40 || k == 83) {
            // down
            pacman.nextDirection = DIRECTION_DOWN;
        } else if (k == 32) {
            pacman.isMoving = !pacman.isMoving;  
        }
    }, 1);
});
