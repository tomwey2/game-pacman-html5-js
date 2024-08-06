class Pacman {
  constructor(startTile, speed, board) {
    this.board = board;
    this.pixel = startTile.centerPixel();
    this.pixel.x += speed;
    this.speed = speed;
    this.direction = DIRECTION_RIGHT;
    this.nextDirection = DIRECTION_RIGHT;
    this.currentFrame = 0;
    this.currentFrameOffset = +1;
    this.frameCount = 2;
    this.spriteSheet = SPRITESHEET.actors.filter(
      (item) => item.actor == ACTOR_PACMAN
    )[0];

    setInterval(() => {
      this.changeAnimation();
    }, 75);
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
    if (this.board.isFood(tile)) {
      this.board.removeFood(tile);
      addScore(10);
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

  moveBackwards() {
    switch (this.direction) {
      case DIRECTION_RIGHT:
        this.pixel.x -= this.speed;
        break;
      case DIRECTION_UP:
        this.pixel.y += this.speed;
        break;
      case DIRECTION_LEFT:
        this.pixel.x += this.speed;
        break;
      case DIRECTION_DOWN:
        this.pixel.y -= this.speed;
        break;
    }
  }

  checkCollision() {
    if (!this.pixel.isCenter()) return;
    const tile = this.pixel.getTile();
    return this.board.isWall(tile.neighbour(this.direction));
  }

  checkGhostCollision() {
    const nextTile = this.pixel.getTile();
    return isGhost(nextTile);
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

  changeAnimation() {
    this.currentFrame++;
    if (
      this.currentFrame >= this.spriteSheet.index.get(this.direction).length
    ) {
      this.currentFrame = 0;
    }
  }

  drawCoord() {
    const tile = this.pixel.getTile();
    drawText(
      650,
      80,
      "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y),
      "yellow"
    );
  }

  draw() {
    this.drawCoord(); // TODO: only for developing
    var index = this.spriteSheet.index.get(this.direction)[this.currentFrame];
    ctx.drawImage(
      spriteSheet,
      index * 30 + this.spriteSheet.offsets[index].x,
      this.spriteSheet.spriteRow * 30 + this.spriteSheet.offsets[index].y,
      30,
      30,
      this.pixel.x - PACMAN_SIZE / 2,
      this.pixel.y - PACMAN_SIZE / 2,
      PACMAN_SIZE,
      PACMAN_SIZE
    );
  }
}
