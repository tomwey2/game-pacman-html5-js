class Pacman extends AnimatedSprite2D {
  constructor(startTile) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_RIGHT, ACTOR_PACMAN, 75);
    this.speed = PACMAN_NORMAL_SPEED;
    this.nextDirection = DIRECTION_RIGHT;
    this.startTile = startTile;
  }

  init() {
    this.pixel = this.startTile.centerPixel();
    this.direction = DIRECTION_RIGHT;
    this.nextDirection = DIRECTION_RIGHT;
  }

  move() {
    this.changeDirectionIfPossible();

    if (!this.checkCollision()) {
      this.moveForwards(this.speed);
      this.eat();
    }

    if (this.checkGhostCollision()) {
      //console.info("collision with ghost");
    }
  }

  eat() {
    const tile = this.pixel.getTile();
    if (game.board.removeFood(tile.x, tile.y)) {
      game.addScore(10);
      if (game.board.countFoods() == 0) {
        setGameState(LEVEL_IS_WON);
      }
    }
    if (game.board.removePowerFood(tile.x, tile.y)) {
      game.addScore(50);
      game.eatPowerFood();
    }
  }

  checkCollision() {
    if (!this.pixel.isCenter()) return;
    const tile = this.pixel.getTile();
    return game.board.isWall(tile.neighbour(this.direction));
  }

  checkGhostCollision() {
    const nextTile = this.pixel.getTile();
    const ghost = game.getGhost(nextTile);
    if (ghost != undefined) {
      console.log("collision with ghost: " + ghost);
      if (ghost.state == GHOST_STATE_BLUE || ghost.state == GHOST_STATE_WHITE) {
        ghost.changeState(GHOST_STATE_EATEN);
      } else if (ghost.state == GHOST_STATE_NORMAL) {
        setGameState(LEVEL_IS_LOST);
      }
      return true;
    }
    return false;
  }

  changeDirectionIfPossible() {
    if (this.direction == this.nextDirection) return;
    if (!this.pixel.isCenter()) return;
    var tempDirection = this.direction;
    this.direction = this.nextDirection;
    if (this.checkCollision()) {
      this.direction = tempDirection;
    }
  }

  drawCoord() {
    const tile = this.pixel.getTile();
    drawText(
      650,
      80,
      "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y),
      "yellow",
    );
  }
}

class PacmanImage extends Sprite2D {
  constructor(startTile, ghostActor) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_LEFT, ACTOR_PACMAN);
    this.currentFrame = 1;
    this.startTile = startTile;
  }
}
