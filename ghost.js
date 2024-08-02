class Ghost {
  constructor(startTile, speed, board, pacman, ghostActor, findPath) {
    this.pixel = getCenterPoint(startTile);
    this.speed = speed;
    this.pixel.x += 2 * speed;
    this.board = board;
    this.pacman = pacman;
    this.findPath = findPath;
    this.isMoving = true;
    this.direction = DIRECTION_LEFT;
    this.currentFrame = 0;
    this.path = [];
    this.spriteSheet = SPRITESHEET.actors.filter(
      (item) => item.actor == ghostActor
    )[0];

    setInterval(() => {
      this.changeAnimation();
    }, 200);
    this.newPath();
  }

  move() {
    this.changeDirectionIfPossible();

    if (!this.checkCollision()) {
      this.moveForwards();
    }
  }

  newPath() {
    if (betweenTile(this.pixel)) return;
    this.path = [];
    if (
      this.findPath(
        getTile(this.pixel),
        getTile(this.pacman.pixel),
        [],
        this.path,
        50
      )
    ) {
      console.info("gefunden");
    }
    console.info(this.path);
  }

  moveForwards() {
    const tile = getTile(this.pixel);
    switch (this.direction) {
      case DIRECTION_RIGHT:
        if (tile.x == RIGHT_DOOR_TILE.x && tile.y == RIGHT_DOOR_TILE.y) {
          this.pixel = getCenterPoint(LEFT_DOOR_TILE);
        } else {
          this.pixel.x += this.speed;
        }
        break;
      case DIRECTION_UP:
        this.pixel.y -= this.speed;
        break;
      case DIRECTION_LEFT:
        if (tile.x == LEFT_DOOR_TILE.x && tile.y == LEFT_DOOR_TILE.y) {
          this.pixel = getCenterPoint(RIGHT_DOOR_TILE);
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
    if (betweenTile(this.pixel)) return;
    var nextTile = getTile(this.pixel);

    switch (this.direction) {
      case DIRECTION_RIGHT:
        nextTile.x++;
        break;
      case DIRECTION_LEFT:
        nextTile.x--;
        break;
      case DIRECTION_UP:
        nextTile.y--;
        break;
      case DIRECTION_DOWN:
        nextTile.y++;
        break;
    }

    if (this.board.isWall(nextTile)) {
      return true;
    }
    return false;
  }

  changeDirectionIfPossible() {
    const tile = getTile(this.pixel);
    if (!betweenTile(this.pixel)) {
      if (this.path.length > 0) {
        const next = this.path.shift();
        if (next.x < tile.x) {
          this.direction = DIRECTION_LEFT;
        }
        if (next.x > tile.x) {
          this.direction = DIRECTION_RIGHT;
        }
        if (next.y < tile.y) {
          this.direction = DIRECTION_UP;
        }
        if (next.y > tile.y) {
          this.direction = DIRECTION_DOWN;
        }
      } else {
        this.newPath();
      }
    }
  }

  changeAnimation() {
    if (!this.isMoving) {
      this.currentFrame = 0;
    } else {
      this.currentFrame++;
      if (
        this.currentFrame >= this.spriteSheet.index.get(this.direction).length
      ) {
        this.currentFrame = 0;
      }
    }
  }

  drawCoord() {
    if (this.spriteSheet.actor == ACTOR_BLINKY) {
      const tile = getTile(this.pixel);
      drawText(
        650,
        40,
        "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y),
        "red"
      );
    }
  }

  draw() {
    this.drawCoord();
    var index = this.spriteSheet.index.get(this.direction)[this.currentFrame];
    ctx.drawImage(
      spriteSheet,
      index * 30 + this.spriteSheet.offsets[index].x,
      this.spriteSheet.spriteRow * 30 + this.spriteSheet.offsets[index].y,
      30,
      30,
      this.pixel.x - GHOST_SIZE / 2 + 2,
      this.pixel.y - GHOST_SIZE / 2,
      GHOST_SIZE,
      GHOST_SIZE
    );
  }
}
