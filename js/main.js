"use strict";
let intro = new Intro();
let game = new Game();
let gameState = GAME_INIT;
let gameInterval = setInterval(mainloop, 1000 / fps);
let touchMoveX = 0;
let touchMoveY = 0;
let touchPoint = 0;

function setGameState(state) {
  gameState = state;
}

/*
state           event               action          next state
INIT            keypressed          level = 1       READY
READY           5 secs                              RUNNING
RUNNING         all foods eaten                     WON
                ghost collision                     LOST
WON                                 inc level       READY
LOST            lives > 0           dec lives       READY
                lives == 0                          OVER
OVER            keypressed                          INIT
*/
function mainloop() {
  switch (gameState) {
    case GAME_INIT:
      intro.loop();
      game.init();
      break;
    case GAME_IS_READY:
      game.ready();
      break;
    case GAME_IS_RUNNING:
      game.loop();
      break;
    case LEVEL_IS_LOST:
      game.levelLost();
      break;
    case LEVEL_IS_WON:
      game.levelWon();
      break;
    case GAME_IS_OVER:
      game.over();
      break;
  }
  console.log(
    "level=" + game.level + " lives=" + game.lives + " state=" + gameState,
  );
}

mainloop();

window.addEventListener("keydown", (event) => {
  let k = event.keyCode;

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
          setGameState(GAME_IS_RUNNING);
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

canvas.addEventListener("touchstart", (event) => {
  event.preventDefault();
  touchMoveX = event.touches[0].screenX;
  touchMoveY = event.touches[0].screenY;
});

canvas.addEventListener("touchend", (event) => {
  event.preventDefault();
  const touches = event.changedTouches;
  if (touches.length > 0) {
    const dx = touches[0].screenX - touchMoveX;
    const dy = touches[0].screenY - touchMoveY;
    if (dx < 5 && dy < 5) {
      touchPoint++;
    }
    const touchLeft = Math.abs(dx) > Math.abs(dy) && dx < 0;
    const touchRight = Math.abs(dx) > Math.abs(dy) && dx > 0;
    const touchUp = Math.abs(dx) < Math.abs(dy) && dy < 0;
    const touchDown = Math.abs(dx) < Math.abs(dy) && dy > 0;
    const doubleTouch = touchPoint >= 2;

    switch (gameState) {
      case GAME_INIT:
        if (doubleTouch) {
          setGameState(GAME_IS_READY);
          touchPoint = 0;
        }
        break;
      case GAME_IS_READY:
        if (doubleTouch) {
          setGameState(GAME_IS_RUNNING);
          touchPoint = 0;
        }
        break;
      case GAME_IS_RUNNING:
        if (touchLeft) {
          game.pacman.nextDirection = DIRECTION_LEFT;
        } else if (touchUp) {
          game.pacman.nextDirection = DIRECTION_UP;
        } else if (touchRight) {
          game.pacman.nextDirection = DIRECTION_RIGHT;
        } else if (touchDown) {
          game.pacman.nextDirection = DIRECTION_DOWN;
        } else if (doubleTouch) {
          setGameState(GAME_IS_PAUSED);
          touchPoint = 0;
        }
        break;
      case GAME_IS_PAUSED:
        if (doubleTouch) {
          setGameState(GAME_IS_RUNNING);
          touchPoint = 0;
        }
        break;
      case GAME_IS_OVER:
        if (doubleTouch) {
          setGameState(GAME_INIT);
          touchPoint = 0;
        }
        break;
    }
  }
});
