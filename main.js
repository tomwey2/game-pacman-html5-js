var intro = new Intro();
var game = new Game();
var gameState = GAME_INIT;
var gameInterval = setInterval(gameloop, 1500 / fps);

function setGameState(state) {
    gameState = state;
}


/*
state           event               action          next state
game init       -                   level 1         game start 
game ready      -                   "ready!"        game running
game running    eat all foods       -               level won
                ghost collision     dec lives       level lost          
level won                           inc level       game ready
level lost      -                   lives > 0       game ready
                -                   lives == 0      game over 
game over       keypress                            game init 
*/
function gameloop() {
    console.log("lives=" + game.lives + " state=" + gameState);
    switch (gameState) {
        case GAME_INIT:
            intro.loop();
            game.init();
            break;
        case GAME_IS_READY:
            game.start();
            break;
        case GAME_IS_RUNNING:
            game.loop();
            break;
        case GAME_IS_LOST:
            game.levelLost();
            break;
        case GAME_IS_WON:
            //            levelWon();
            break;
        case GAME_IS_OVER:
            // highscore list
            game.draw();
            break;
    }
}

gameloop();

window.addEventListener("keydown", (event) => {
    var k = event.keyCode;

    const keyPressedLeft = k == 37 || k == 65;    // LEFT || A
    const keyPressedRight = k == 39 || k == 68;   // RIGHT || D
    const keyPressedUp = k == 38 || k == 76;      // UP || L
    const keyPressedDown = k == 40 || k == 77;    // DOWN || M
    const keyPressedSpace = k == 32;              // SPACE

    setTimeout(() => {
        if (keyPressedLeft) {
            game.pacman.nextDirection = DIRECTION_LEFT;
        } else if (keyPressedUp) {
            game.pacman.nextDirection = DIRECTION_UP;
        } else if (keyPressedRight) {
            game.pacman.nextDirection = DIRECTION_RIGHT;
        } else if (keyPressedDown) {
            game.pacman.nextDirection = DIRECTION_DOWN;
        } else if (keyPressedSpace) {
            switch (gameState) {
                case GAME_INIT:
                    setGameState(GAME_IS_READY);
                    break;
                case GAME_IS_READY:
                    setGameState(GAME_IS_RUNNING);
                    break;
                case GAME_IS_RUNNING:
                    setGameState(GAME_IS_PAUSED);
                    break;
                case GAME_IS_PAUSED:
                    setGameState(GAME_IS_LOST);
                    break;
                case GAME_IS_OVER:
                    setGameState(GAME_INIT);
                    break;
            }
        }
    }, 1);
});
