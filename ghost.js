class Ghost extends AnimatedSprite2D {
  constructor(startTile, ghostActor) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_RIGHT, ghostActor, GHOST_ANIMATION_SPEED);
    this.startTile = startTile;
    this.speed = GHOST_TILESPEED;
    this.findPath = dfs;
    this.path = [];
    this.state = GHOST_STATE_NORMAL;
    this.originActor = ghostActor;
  }

  init() {
    this.pixel = this.startTile.centerPixel();
    this.path = [];
    this.direction = DIRECTION_RIGHT;
    this.actor = this.originActor;
  }

  changeState(state) {
    this.state = state;
    switch (this.state) {
      case GHOST_STATE_NORMAL:
        this.actor = this.originActor;
        break;
      case GHOST_STATE_BLUE:
        this.actor = ACTOR_BLUE_GHOST;
        break;
      case GHOST_STATE_WHITE:
        break;
      case GHOST_STATE_EATEN:
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
  }

  newPath() {
    if (!this.pixel.isCenter()) return;
    this.path = [];
    if (
      this.findPath(
        this.pixel.getTile(),
        game.pacman.pixel.getTile(),
        [],
        this.path,
        50,
      )
    ) {
      //console.info("gefunden");
    }
    //console.info(this.path);
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
}

class GhostImage extends Sprite2D {
  constructor(startTile, ghostActor) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_RIGHT, ghostActor);
    this.startTile = startTile;
  }
}
