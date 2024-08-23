class Ghost extends AnimatedSprite2D {
  constructor(startTile, ghostActor) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_RIGHT, ghostActor, GHOST_ANIMATION_SPEED);
    this.originTile = startTile;
    this.speed = GHOST_NORMAL_SPEED;
    this.findPath = dfs;
    this.path = [];
    this.state = GHOST_STATE_NORMAL;
    this.originActor = ghostActor;
  }

  init() {
    this.pixel = this.originTile.centerPixel();
    this.path = [];
    this.direction = DIRECTION_RIGHT;
    this.actor = this.originActor;
  }

  changeState(state) {
    this.state = state;
    this.pixel = this.pixel.getTile().centerPixel();
    switch (this.state) {
      case GHOST_STATE_NORMAL:
        if (this.actor == ACTOR_EATEN_GHOST) {
          this.speed = GHOST_NORMAL_SPEED;
        }
        this.actor = this.originActor;
        break;
      case GHOST_STATE_BLUE:
        this.actor = ACTOR_BLUE_GHOST;
        break;
      case GHOST_STATE_WHITE:
        if (this.actor == ACTOR_EATEN_GHOST) {
          this.speed = GHOST_NORMAL_SPEED;
        }
        this.actor = ACTOR_WHITE_GHOST;
        break;
      case GHOST_STATE_EATEN:
        console.log("GHOST_STATE_EATEN");
        this.actor = ACTOR_EATEN_GHOST;
        this.currentFrame = 0;
        this.speed = GHOST_FAST_SPEED;
        break;
      default:
        break;
    }
  }

  move() {
    this.changeDirectionIfPossible();

    if (!this.checkCollision()) {
      this.moveForwards();
    }
    this.isMoving = false;
  }

  newPath() {
    if (!this.pixel.isCenter()) return;
    const currentTile = this.pixel.getTile();
    var targetTile = currentTile;
    switch (this.state) {
      case GHOST_STATE_NORMAL:
      case GHOST_STATE_BLUE:
      case GHOST_STATE_WHITE:
        targetTile = game.pacman.pixel.getTile();
        break;
      case GHOST_STATE_EATEN:
        targetTile = this.originTile;
        break;
      default:
        break;
    }
    this.path = [];
    this.findPath(currentTile, targetTile, [], this.path, 50);
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
    var nextTile = this.pixel.getTile();
    if (game.board.isWall(nextTile.neighbour(this.direction))) {
      return true;
    }
    return false;
  }

  changeDirectionIfPossible() {
    if (!this.pixel.isCenter()) return;
    const tile = this.pixel.getTile();
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

  drawCoord() {
    if (this.actor == ACTOR_BLINKY) {
      const tile = this.pixel.getTile();
      drawText(
        650,
        40,
        "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y),
        "red",
      );
    }
  }

  toString() {
    switch (this.originActor) {
      case ACTOR_BLINKY:
        return "BLINKY";
      case ACTOR_PINKY:
        return "PINKY";
      case ACTOR_INKY:
        return "INKY";
      case ACTOR_CLYDE:
        return "CLYDE";
      default:
        return "UNKNOWN";
    }
  }
}

class GhostImage extends Sprite2D {
  constructor(tile, ghostActor) {
    super(tile.centerPixel(), DIRECTION_RIGHT, ghostActor);
  }
}
