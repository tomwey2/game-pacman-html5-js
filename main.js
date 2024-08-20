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
  switch (gameState) {
    case GAME_INIT:
      intro.loop();
      game.startGame();
      break;
    case GAME_IS_READY:
      game.startLevel();
      break;
    case GAME_IS_RUNNING:
      game.loop();
      break;
    case GAME_IS_LOST:
      game.levelLost();
      break;
    case GAME_IS_WON:
      game.levelWon();
      break;
    case GAME_IS_OVER:
      game.gameOver();
      break;
    case PACMAN_IS_DIEING:
      game.pacmanIsDieing();
      break;
  }
  console.log(
    "level=" + game.level + " lives=" + game.lives + " state=" + gameState,
  );
}

gameloop();

window.addEventListener("keydown", (event) => {
  var k = event.keyCode;

  const keyPressedLeft = k == 37 || k == 65; // LEFT || A
  const keyPressedRight = k == 39 || k == 68; // RIGHT || D
  const keyPressedUp = k == 38 || k == 76; // UP || L
  const keyPressedDown = k == 40 || k == 77; // DOWN || M
  const keyPressedSpace = k == 32; // SPACE
  const keyPressedEsc = k == 27; // ESC

  setTimeout(() => {
    switch (gameState) {
      case GAME_INIT:
        if (keyPressedSpace) {
          setGameState(GAME_IS_READY);
        }
        break;
      case GAME_IS_READY:
        if (keyPressedSpace) {
          setGameState(GAME_IS_RUNNING);
        }
        break;
      case GAME_IS_RUNNING:
        if (keyPressedLeft) {
          game.pacman.nextDirection = DIRECTION_LEFT;
        } else if (keyPressedUp) {
          game.pacman.nextDirection = DIRECTION_UP;
        } else if (keyPressedRight) {
          game.pacman.nextDirection = DIRECTION_RIGHT;
        } else if (keyPressedDown) {
          game.pacman.nextDirection = DIRECTION_DOWN;
        } else if (keyPressedSpace) {
          setGameState(GAME_IS_PAUSED);
        } else if (keyPressedEsc) {
          setGameState(GAME_IS_OVER);
        }
        break;
      case GAME_IS_PAUSED:
        if (keyPressedSpace) {
          setGameState(GAME_IS_LOST);
        } else if (keyPressedEsc) {
          setGameState(GAME_IS_OVER);
        }
        break;
      case GAME_IS_OVER:
        if (keyPressedSpace) {
          setGameState(GAME_INIT);
        }
        break;
    }
  }, 1);
});
