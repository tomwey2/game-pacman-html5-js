class Board {
  constructor() {
    this.initFood();
  }

  isFood(tile) {
    return data[tile.y][tile.x] == BOARD_NUM_FOOD;
  }

  isDoor(tile) {
    return data[tile.y][tile.x] == BOARD_NUM_DOOR;
  }

  isWall(tile) {
    return this.isSimpleWall(tile) || this.isDoubleWall(tile);
  }

  isSimpleWall(tile) {
    return data[tile.y][tile.x] == BOARD_NUM_SIMPLE_WALL;
  }

  isDoubleWall(tile) {
    return data[tile.y][tile.x] == BOARD_NUM_DOUBLE_WALL;
  }

  isHorizontalWall(tile) {
    return (
      (this.isWall(tileLeft(tile)) &&
        this.isWall(tileRight(tile)) &&
        (!this.isWall(tileUp(tile)) || !this.isWall(tileDown(tile)))) ||
      (!this.isWall(tileUp(tile)) && !this.isWall(tileDown(tile)))
    );
  }

  isVerticalWall(tile) {
    return (
      this.isWall(tileUp(tile)) &&
      this.isWall(tileDown(tile)) &&
      (!this.isWall(tileLeft(tile)) || !this.isWall(tileRight(tile)))
    );
  }

  isTopLeftWall(tile) {
    return (
      (this.isWall(tileDown(tile)) &&
        this.isWall(tileRight(tile)) &&
        !this.isWall(tileLeftUp(tile)) &&
        !this.isWall(tileUp(tile)) &&
        !this.isWall(tileLeft(tile))) ||
      (this.isWall(tileDown(tile)) &&
        this.isWall(tileRight(tile)) &&
        !this.isWall(tileRightDown(tile)))
    );
  }

  isTopRightWall(tile) {
    return (
      (this.isWall(tileDown(tile)) &&
        this.isWall(tileLeft(tile)) &&
        !this.isWall(tileRightUp(tile)) &&
        !this.isWall(tileUp(tile)) &&
        !this.isWall(tileRight(tile))) ||
      (this.isWall(tileDown(tile)) &&
        this.isWall(tileLeft(tile)) &&
        !this.isWall(tileLeftDown(tile)))
    );
  }

  isBottomLeftWall(tile) {
    return (
      (this.isWall(tileUp(tile)) &&
        this.isWall(tileRight(tile)) &&
        !this.isWall(tileLeft(tile)) &&
        !this.isWall(tileDown(tile)) &&
        !this.isWall(tileLeftDown(tile))) ||
      (this.isWall(tileUp(tile)) &&
        this.isWall(tileRight(tile)) &&
        !this.isWall(tileRightUp(tile)))
    );
  }

  isBottomRightWall(tile) {
    return (
      (this.isWall(tileUp(tile)) &&
        this.isWall(tileLeft(tile)) &&
        !this.isWall(tileRight(tile)) &&
        !this.isWall(tileDown(tile)) &&
        !this.isWall(tileRightDown(tile))) ||
      (this.isWall(tileLeft(tile)) &&
        this.isWall(tileUp(tile)) &&
        !this.isWall(tileLeftUp(tile)))
    );
  }

  drawSimpleWall(path) {
    if (path.length > 0) {
      drawLineSegment(path, BOARD_WALL_COLOR, SIMPLE_WALL_WIDTH);
    }
  }

  drawDoubleWall(path) {
    if (path.length > 0) {
      drawLineSegment(path, BOARD_WALL_COLOR, DOUBLE_WALL_WIDTH);
      drawLineSegment(path, GAME_BACKGROUND_COLOR, SIMPLE_WALL_WIDTH);
    }
  }

  drawSimpleCorner(path) {
    drawCurve(path, BOARD_WALL_COLOR, SIMPLE_WALL_WIDTH);
  }

  drawDoubleCorner(path) {
    drawCurve(path, BOARD_WALL_COLOR, DOUBLE_WALL_WIDTH);
    drawCurve(path, GAME_BACKGROUND_COLOR, SIMPLE_WALL_WIDTH);
  }

  drawWall(tile, path, corner) {
    if (this.isSimpleWall(tile)) {
      if (corner) {
        this.drawSimpleCorner(path);
      } else {
        this.drawSimpleWall(path);
      }
    } else {
      if (corner) {
        this.drawDoubleCorner(path);
      } else {
        this.drawDoubleWall(path);
      }
    }
  }

  drawDoor(path) {
    drawLineSegment(path, BOARD_DOOR_COLOR, DOOR_WIDTH);
  }

  drawBoard() {
    for (var y = 0; y < data.length; y++) {
      for (var x = 0; x < data[0].length; x++) {
        const tile = { x: x, y: y };
        if (this.isWall(tile)) {
          if (this.isHorizontalWall(tile)) {
            this.drawWall(
              tile,
              [getWestPoint(tile), getEastPoint(tile)],
              false
            );
          }
          if (this.isVerticalWall(tile)) {
            this.drawWall(
              tile,
              [getNorthPoint(tile), getSouthPoint(tile)],
              false
            );
          }
          if (this.isTopLeftWall(tile)) {
            this.drawWall(
              tile,
              [getSouthPoint(tile), getCenterPoint(tile), getEastPoint(tile)],
              true
            );
          }
          if (this.isTopRightWall(tile)) {
            this.drawWall(
              tile,
              [getSouthPoint(tile), getCenterPoint(tile), getWestPoint(tile)],
              true
            );
          }
          if (this.isBottomLeftWall(tile)) {
            this.drawWall(
              tile,
              [getNorthPoint(tile), getCenterPoint(tile), getEastPoint(tile)],
              true
            );
          }
          if (this.isBottomRightWall(tile)) {
            this.drawWall(
              tile,
              [getNorthPoint(tile), getCenterPoint(tile), getWestPoint(tile)],
              true
            );
          }
        } else if (this.isDoor(tile)) {
          this.drawDoor([getWestPoint(tile), getEastPoint(tile)]);
        }
      }
    }
  }

  drawFood() {
    for (var y = 0; y < data.length; y++) {
      for (var x = 0; x < data[0].length; x++) {
        const tile = { x: x, y: y };
        if (this.isFood(tile)) {
          const pixel = getCenterPoint(tile);
          ctx.drawImage(
            spriteSheet,
            45,
            302,
            5,
            5,
            pixel.x - FOOD_SIZE / 2,
            pixel.y - FOOD_SIZE / 2,
            FOOD_SIZE,
            FOOD_SIZE
          );
        }
      }
    }
  }

  draw() {
    this.drawBoard();
    this.drawFood();
  }

  initFood() {
    for (var y = 0; y < data.length; y++) {
      for (var x = 0; x < data[0].length; x++) {
        var tile = { x: x, y: y };
        if (
          y > 3 &&
          y < data.length - 3 &&
          x > 0 &&
          x < data[0].length - 2 &&
          !(y > 12 && y < 22 && x > 0 && x < 7) &&
          !(y > 12 && y < 22 && x > 22 && x < data[0].length - 2) &&
          !(y > 11 && y < 23 && x > 7 && x < 22) &&
          !(x >= 14 && x <= 15 && y == 26) &&
          !this.isWall(tile)
        ) {
          data[tile.y][tile.x] = BOARD_NUM_FOOD;
        }
      }
    }
  }

  removeFood(tile) {
    data[tile.y][tile.x] = 0;
  }
}
