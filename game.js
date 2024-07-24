let isMovingPacman = false;

function gameloop() {
    update();
    draw();
}

function update() {
    // todo
    if (isMovingPacman) {
        pacman.move();
    }
}

function draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, gameBgColor)
    // todo
    drawBoard();
    pacman.draw();
}

function createPacman() {
    pacman = new Pacman(
        tileSize * 1,
        tileSize * 4,
        tileSize,
        tileSize,
        tileSize / 5
    );
}

createPacman();
gameloop();

var gameInterval = setInterval(gameloop, 1500 / fps);
window.addEventListener("keydown", (event) => {
    let k = event.keyCode;

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
            isMovingPacman = !isMovingPacman;  
        }
    }, 1);
});
