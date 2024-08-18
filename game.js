class Game {
  constructor() {
    this.board = new Board();
    this.pacman = new Pacman(PACMAN_START_TILE, PACMAN_TILESPEED);
    this.dieingPacman = new DieingPacman(200);
    this.blinky = new Ghost(
      BLINKY_STARTTILE,
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_BLINKY,
      GHOST_ANIMATION_SPEED,
      dfs,
    );
    this.pinky = new Ghost(
      PINKY_STARTTILE,
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_PINKY,
      GHOST_ANIMATION_SPEED,
      dfs,
    );
    this.inky = new Ghost(
      INKY_STARTTILE,
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_INKY,
      GHOST_ANIMATION_SPEED,
      dfs,
    );
    this.clyde = new Ghost(
      CLYDE_STARTTILE,
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_CLYDE,
      GHOST_ANIMATION_SPEED,
      dfs,
    );
    this.ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
    this.foods = [];
    this.lives = 0;
    this.level = 0;
    this.score = 0;
    this.highscore = 1024;
  }

  init() {
    this.board.initFood();
    this.lives = GAME_START_LIVES;
    this.level = 1;
    this.score = 0;
    this.dieingPacman.isVisible = false;
  }

  start() {
    this.pacman.reset();
    this.blinky.reset();
    this.pinky.reset();
    this.inky.reset();
    this.clyde.reset();
    this.visibleActors(true);
    this.draw();
  }

  loop() {
    this.update();
    this.draw();
  }

  update() {
    this.pacman.move();
    for (var i = 0; i < this.ghosts.length; i++) {
      this.ghosts[i].move();
    }
  }

  addScore(value) {
    this.score += value;
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }

  levelLost() {
    this.lives--;
    this.visibleActors(false);
    this.dieingPacman.pixel = this.pacman.pixel;
    this.dieingPacman.isVisible = true;
    setGameState(PACMAN_IS_DIEING);
  }

  levelWon() {
    this.visibleActors(false);
    this.level++;
    this.board.initFood();
    setGameState(GAME_IS_READY);
  }

  gameOver() {
    this.visibleActors(false);
    this.lives = 0;
    this.draw();
  }

  pacmanIsDieing() {
    this.draw();
  }

  visibleActors(isVisible) {
    this.pacman.isVisible = isVisible;
    for (var i = 0; i < this.ghosts.length; i++) {
      this.ghosts[i].isVisible = isVisible;
    }
  }

  isGhost(tile) {
    for (var i = 0; i < this.ghosts.length; i++) {
      var ghostTile = this.ghosts[i].pixel.getTile();
      if (tile.equal(ghostTile)) {
        return true;
      }
    }

    return false;
  }

  drawScore() {
    drawText(100, 40, "1UP", "white");
    drawText(100, 80, parseInt(this.score), "white");
    drawText(350, 40, "HIGH SCORE", "white");
    drawText(350, 80, parseInt(this.highscore), "white");
    drawText(700, 40, "2UP", "white");
    drawText(700, 80, "0", "white");
  }

  drawReady() {
    drawText(380, 630, "Ready!", "yellow");
  }

  drawGameOver() {
    drawText(345, 630, "Game Over", "red");
  }

  drawLives() {
    for (var live = 0; live < this.lives - 1; live++) {
      var index = this.pacman.spriteSheet.index.get(DIRECTION_LEFT)[1];
      ctx.drawImage(
        spriteSheet,
        index * 30 + this.pacman.spriteSheet.offsetsInSheet[index].x,
        this.pacman.spriteSheet.offsetsInSheet[index].y,
        30,
        30,
        3 * TILESIZE + live * TILESIZE * 2,
        34 * TILESIZE,
        PACMAN_SIZE,
        PACMAN_SIZE,
      );
    }
  }

  draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
    this.drawScore();
    this.drawLives();
    this.board.draw();
    this.pacman.draw();
    for (var i = 0; i < this.ghosts.length; i++) {
      this.ghosts[i].draw();
    }
    this.drawLives();
    if (gameState == GAME_IS_READY) {
      this.drawReady();
    }
    if (gameState == GAME_IS_OVER) {
      this.drawGameOver();
    }
    if (gameState == PACMAN_IS_DIEING) {
      this.dieingPacman.draw();
    }
  }
}
