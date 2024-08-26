"use strict";
class Ghost extends AnimatedSprite2D {
  constructor(startTile, ghostActor) {
    var centerPixel = startTile.centerPixel();
    super(centerPixel, DIRECTION_RIGHT, ghostActor, GHOST_ANIMATION_SPEED);
    this.startTile = startTile;
    this.speed = GHOST_NORMAL_SPEED;
    this.findPath = dfs;
    this.path = [];
    this.state = GHOST_STATE_NORMAL;
    this.startActor = ghostActor;
  }

  init() {
    this.pixel = this.startTile.centerPixel();
    this.path = [];
    this.direction = DIRECTION_RIGHT;
    this.actor = this.startActor;
  }

  /*
  state           event                     next state
  NORMAL          pacman eat power food     BLUE
  BLUE            6 secs                    WHITE
                  collision with pacman     DIED
  WHITE           2 secs                    NORMAL
                  collision with pacman     DIED
  DIED            2 secs                    EYES
  EYES            back to home area         NORMAL
  */
  changeState(state, score = 0) {
    if (this.state == GHOST_STATE_DIED && state != GHOST_STATE_EYES) return;
    this.state = state;
    this.pixel = this.pixel.getTile().centerPixel();
    this.currentFrame = 0;
    this.speed = GHOST_NORMAL_SPEED;
    switch (this.state) {
      case GHOST_STATE_NORMAL:
        this.actor = this.startActor;
        break;
      case GHOST_STATE_BLUE:
        this.actor = ACTOR_BLUE_GHOST;
        break;
      case GHOST_STATE_WHITE:
        this.actor = ACTOR_WHITE_GHOST;
        break;
      case GHOST_STATE_EYES:
        this.actor = ACTOR_EYES_GHOST;
        this.speed = GHOST_FAST_SPEED;
        break;
      case GHOST_STATE_DIED:
        this.direction = DIRECTION_NONE;
        switch (score) {
          case 200:
            this.actor = ACTOR_POINTS_200;
            break;
          case 400:
            this.actor = ACTOR_POINTS_400;
            break;
          case 800:
            this.actor = ACTOR_POINTS_800;
            break;
          case 1600:
            this.actor = ACTOR_POINTS_1600;
            break;
        }
        setTimeout(() => this.changeState(GHOST_STATE_EYES), 2000);
        break;
      default:
        break;
    }
  }

  move() {
    if (this.state == GHOST_STATE_DIED) return;
    this.changeDirectionIfPossible();

    if (!this.checkCollision()) {
      this.moveForwards(this.speed);
      if (
        this.state == GHOST_STATE_EYES &&
        this.pixel.getTile().equal(this.startTile)
      ) {
        this.changeState(GHOST_STATE_NORMAL);
      }
    }
  }

  newPath() {
    if (!this.pixel.isCenter()) return;
    const currentTile = this.pixel.getTile();
    let targetTile = currentTile;
    switch (this.state) {
      case GHOST_STATE_NORMAL:
      case GHOST_STATE_BLUE:
      case GHOST_STATE_WHITE:
        targetTile = game.pacman.pixel.getTile();
        break;
      case GHOST_STATE_EYES:
        targetTile = this.startTile;
        break;
      default:
        break;
    }
    this.path = [];
    this.findPath(currentTile, targetTile, [], this.path, 50);
  }

  checkCollision() {
    if (!this.pixel.isCenter()) return;
    const nextTile = this.pixel.getTile();
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
    switch (this.startActor) {
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
