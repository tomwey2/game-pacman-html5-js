var board = new Board();
var pacman = new Pacman(PACMAN_START_TILE, PACMAN_TILESPEED, board);
var blinky = new Ghost(
  BLINKY_STARTTILE,
  GHOST_TILESPEED,
  board,
  pacman,
  ACTOR_BLINKY,
  dfs
);
var pinky = new Ghost(
  PINKY_STARTTILE,
  GHOST_TILESPEED,
  board,
  pacman,
  ACTOR_PINKY,
  dfs
);
var inky = new Ghost(
  INKY_STARTTILE,
  GHOST_TILESPEED,
  board,
  pacman,
  ACTOR_INKY,
  dfs
);
var clyde = new Ghost(
  CLYDE_STARTTILE,
  GHOST_TILESPEED,
  board,
  pacman,
  ACTOR_CLYDE,
  dfs
);
var ghosts = [blinky, pinky, inky, clyde];
var lives = GAME_START_LIVES;
var highscore = 1200;
var score = 0;
var gamePaused = true;

function isGhost(tile) {
  for (var i = 0; i < ghosts.length; i++) {
    var ghostTile = getTile(ghosts[i].pixel);
    if (tile.x == ghostTile.x && tile.y == ghostTile.y) {
      return true;
    }
  }

  return false;
}

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
  if (gamePaused) return;
  pacman.move();
  for (var i = 0; i < ghosts.length; i++) {
    ghosts[i].move();
  }
}

function drawScore() {
  drawText(100, 40, "1UP", "white");
  drawText(100, 80, parseInt(score), "white");
  drawText(350, 40, "HIGH  SCORE", "white");
  drawText(350, 80, parseInt(highscore), "white");
}

function drawLives() {
  for (var live = 0; live < lives - 1; live++) {
    var index = pacman.spriteSheet.index.get(DIRECTION_LEFT)[1];
    ctx.drawImage(
      spriteSheet,
      index * 30 + pacman.spriteSheet.offsets[index].x,
      pacman.spriteSheet.offsets[index].y,
      30,
      30,
      3 * TILESIZE + live * TILESIZE * 2,
      34 * TILESIZE,
      PACMAN_SIZE,
      PACMAN_SIZE
    );
  }
}

function draw() {
  drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
  board.draw();
  pacman.draw();
  for (var i = 0; i < ghosts.length; i++) {
    ghosts[i].draw();
  }
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
      gamePaused = !gamePaused;
    }
  }, 1);
});
