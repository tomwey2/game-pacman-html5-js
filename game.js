"use strict";
class Game {
  constructor() {
    this.board = new Board();
    this.pacman = new Pacman(PACMAN_START_TILE);
    this.pacmanLives = [
      new PacmanImage(new Tile(3, 34)),
      new PacmanImage(new Tile(5, 34)),
      new PacmanImage(new Tile(7, 34)),
      new PacmanImage(new Tile(9, 34)),
    ];
    this.blinky = new Ghost(BLINKY_STARTTILE, ACTOR_BLINKY);
    this.pinky = new Ghost(PINKY_STARTTILE, ACTOR_PINKY);
    this.inky = new Ghost(INKY_STARTTILE, ACTOR_INKY);
    this.clyde = new Ghost(CLYDE_STARTTILE, ACTOR_CLYDE);
    this.ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
    this.lives = 0;
    this.level = 0;
    this.score = 0;
    this.highscore = 1024;
    this.ghostScoreIndex = 0;
  }

  loop() {
    this.update();
    this.draw();
  }

  update() {
    this.pacman.move();
    this.ghosts.forEach((ghost) => ghost.move());
  }

  init() {
    this.lives = GAME_START_LIVES;
    this.level = 1;
    this.score = 0;
    this.board.visiblePowerFoods(true);
    this.board.visibleFoods(true);
    this.visiblePacmanLives(true);
  }

  ready() {
    this.pacman.init();
    this.blinky.init();
    this.pinky.init();
    this.inky.init();
    this.clyde.init();
    this.visibleActors(true);
    this.draw();
  }

  addScore(value) {
    this.score += value;
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }

  levelLost() {
    this.visibleActors(false);
    this.decPacmanLive();
    if (this.lives > 0) {
      setGameState(GAME_IS_READY);
    } else {
      setGameState(GAME_IS_OVER);
    }
  }

  levelWon() {
    this.level++;
    this.visibleActors(false);
    this.board.visibleFoods(true);
    this.board.visiblePowerFoods(true);
    setGameState(GAME_IS_READY);
  }

  over() {
    this.visibleActors(false);
    this.lives = 0;
    this.draw();
  }

  dieGhost(ghost) {
    ghost.changeState(GHOST_STATE_DIED, GHOST_DIE_SCORES[this.ghostScoreIndex]);
    this.addScore(GHOST_DIE_SCORES[this.ghostScoreIndex]);
    if (this.ghostScoreIndex < GHOST_DIE_SCORES.length - 1) {
      this.ghostScoreIndex++;
    }
  }

  diePacman() {
    this.visibleActors(false);
    this.pacman.isVisible = true;
    this.pacman.changeState(PACMAN_STATE_DYING);
  }

  decPacmanLive() {
    this.lives--;
    if (this.lives > 0) {
      this.pacmanLives[this.lives - 1].isVisible = false;
    }
  }

  visibleActors(isVisible) {
    this.pacman.isVisible = isVisible;
    this.ghosts.forEach((ghost) => (ghost.isVisible = isVisible));
  }

  getGhost(tile) {
    return this.ghosts.find((ghost) => ghost.pixel.getTile().equal(tile));
  }

  visiblePacmanLives(isVisible) {
    this.pacmanLives.forEach(
      (pacmanLive) => (pacmanLive.isVisible = isVisible),
    );
  }

  eatPowerFood() {
    if (this.ghostStateInterval == undefined) {
      this.setGhostState(GHOST_STATE_BLUE);
    }
  }

  setGhostState(state) {
    if (this.state != GHOST_STATE_NORMAL) {
      this.ghosts.forEach((ghost) => ghost.changeState(state));
    }
    switch (state) {
      case GHOST_STATE_NORMAL:
        this.ghostScoreIndex = 0;
        break;
      case GHOST_STATE_BLUE:
        setTimeout(() => this.setGhostState(GHOST_STATE_WHITE), 6000);
        break;
      case GHOST_STATE_WHITE:
        setTimeout(() => this.setGhostState(GHOST_STATE_NORMAL), 2000);
    }
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

  draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
    this.board.draw();
    this.drawScore();
    this.pacman.draw();
    this.ghosts.forEach((ghost) => ghost.draw());
    if (gameState == GAME_IS_READY) {
      this.drawReady();
    }
    if (gameState == GAME_IS_OVER) {
      this.drawGameOver();
    }
    this.pacmanLives.forEach((live) => live.draw());
    // this.pacman.drawCoord();
  }
}
