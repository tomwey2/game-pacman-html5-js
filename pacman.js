class Pacman extends AnimatedSprite2D {
  constructor(startTile, speed) {
    var centerPixel = startTile.centerPixel();
    centerPixel.x += speed;
    super(centerPixel, DIRECTION_RIGHT, ACTOR_PACMAN, 75);
    this.speed = speed;
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
      this.moveForwards();
      this.eat();
    }

    if (this.checkGhostCollision()) {
      console.info("collision with ghost");
    }
  }

  eat() {
    const tile = this.pixel.getTile();
    if (game.board.removeFood(tile.x, tile.y)) {
      game.addScore(10);
      if (game.board.countFoods() == 0) {
        setGameState(GAME_IS_WON);
      }
    }
    if (game.board.removePowerFood(tile.x, tile.y)) {
      game.addScore(50);
    }
  }

  moveForwards() {
    const tile = this.pixel.getTile();
    switch (this.direction) {
      case DIRECTION_RIGHT:
        if (tile.equal(RIGHT_DOOR_TILE)) {
          this.pixel = LEFT_DOOR_TILE.centerPixel();
        } else {
          this.pixel.x += this.speed;
        }
        break;
      case DIRECTION_UP:
        this.pixel.y -= this.speed;
        break;
      case DIRECTION_LEFT:
        if (tile.equal(LEFT_DOOR_TILE)) {
          this.pixel = RIGHT_DOOR_TILE.centerPixel();
        } else {
          this.pixel.x -= this.speed;
        }
        break;
      case DIRECTION_DOWN:
        this.pixel.y += this.speed;
        break;
    }
  }

  checkCollision() {
    if (!this.pixel.isCenter()) return;
    const tile = this.pixel.getTile();
    return game.board.isWall(tile.neighbour(this.direction));
  }

  checkGhostCollision() {
    const nextTile = this.pixel.getTile();
    if (game.isGhost(nextTile)) {
      setGameState(GAME_IS_LOST);
    }
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
