"use strict";
class Board {
  constructor() {
    this.foods = this.createFoods();
    this.powerFoods = this.createPowerFoods();
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
      (this.isWall(tile.left()) &&
        this.isWall(tile.right()) &&
        (!this.isWall(tile.up()) || !this.isWall(tile.down()))) ||
      (!this.isWall(tile.up()) && !this.isWall(tile.down()))
    );
  }

  isVerticalWall(tile) {
    return (
      this.isWall(tile.up()) &&
      this.isWall(tile.down()) &&
      (!this.isWall(tile.left()) || !this.isWall(tile.right()))
    );
  }

  isTopLeftWall(tile) {
    return (
      (this.isWall(tile.down()) &&
        this.isWall(tile.right()) &&
        !this.isWall(tile.leftUp()) &&
        !this.isWall(tile.up()) &&
        !this.isWall(tile.left())) ||
      (this.isWall(tile.down()) &&
        this.isWall(tile.right()) &&
        !this.isWall(tile.rightDown()))
    );
  }

  isTopRightWall(tile) {
    return (
      (this.isWall(tile.down()) &&
        this.isWall(tile.left()) &&
        !this.isWall(tile.rightUp()) &&
        !this.isWall(tile.up()) &&
        !this.isWall(tile.right())) ||
      (this.isWall(tile.down()) &&
        this.isWall(tile.left()) &&
        !this.isWall(tile.leftDown()))
    );
  }

  isBottomLeftWall(tile) {
    return (
      (this.isWall(tile.up()) &&
        this.isWall(tile.right()) &&
        !this.isWall(tile.left()) &&
        !this.isWall(tile.down()) &&
        !this.isWall(tile.leftDown())) ||
      (this.isWall(tile.up()) &&
        this.isWall(tile.right()) &&
        !this.isWall(tile.rightUp()))
    );
  }

  isBottomRightWall(tile) {
    return (
      (this.isWall(tile.up()) &&
        this.isWall(tile.left()) &&
        !this.isWall(tile.right()) &&
        !this.isWall(tile.down()) &&
        !this.isWall(tile.rightDown())) ||
      (this.isWall(tile.left()) &&
        this.isWall(tile.up()) &&
        !this.isWall(tile.leftUp()))
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

  drawTile(tile) {
    const px = tile.x * TILESIZE;
    const py = tile.y * TILESIZE;
    drawFillRect(px, py, TILESIZE, TILESIZE, "grey");
    drawFillRect(px + 1, py + 1, TILESIZE - 2, TILESIZE - 2, "black");
  }

  drawBoard() {
    for (let y = 0; y < data.length; y++) {
      for (let x = 0; x < data[0].length; x++) {
        const tile = new Tile(x, y);
        //this.drawTile(tile);
        if (this.isWall(tile)) {
          if (this.isHorizontalWall(tile)) {
            this.drawWall(tile, [tile.westPixel(), tile.eastPixel()], false);
          }
          if (this.isVerticalWall(tile)) {
            this.drawWall(tile, [tile.northPixel(), tile.southPixel()], false);
          }
          if (this.isTopLeftWall(tile)) {
            this.drawWall(
              tile,
              [tile.southPixel(), tile.centerPixel(), tile.eastPixel()],
              true,
            );
          }
          if (this.isTopRightWall(tile)) {
            this.drawWall(
              tile,
              [tile.southPixel(), tile.centerPixel(), tile.westPixel()],
              true,
            );
          }
          if (this.isBottomLeftWall(tile)) {
            this.drawWall(
              tile,
              [tile.northPixel(), tile.centerPixel(), tile.eastPixel()],
              true,
            );
          }
          if (this.isBottomRightWall(tile)) {
            this.drawWall(
              tile,
              [tile.northPixel(), tile.centerPixel(), tile.westPixel()],
              true,
            );
          }
        } else if (this.isDoor(tile)) {
          this.drawDoor([tile.westPixel(), tile.eastPixel()]);
        }
      }
    }
  }

  draw() {
    this.drawBoard();
    this.drawFoods();
    this.drawPowerFoods();
  }

  isFoodPlace(tile) {
    return (
      tile.y > 3 &&
      tile.y < data.length - 3 &&
      tile.x > 0 &&
      tile.x < data[0].length - 2 &&
      !(tile.y > 12 && tile.y < 22 && tile.x > 0 && tile.x < 7) &&
      !(
        tile.y > 12 &&
        tile.y < 22 &&
        tile.x > 22 &&
        tile.x < data[0].length - 2
      ) &&
      !(tile.y > 11 && tile.y < 23 && tile.x > 7 && tile.x < 22) &&
      !(tile.x >= 14 && tile.x <= 15 && tile.y == 26) &&
      !(tile.x == 2 && tile.y == 6) && // Powerfood
      !(tile.x == 27 && tile.y == 6) && // Powerfood
      !(tile.x == 2 && tile.y == 26) && // Powerfood
      !(tile.x == 27 && tile.y == 26) && // Powerfood
      !this.isWall(tile)
    );
  }

  createFoods() {
    let foods = [];
    for (let y = 0; y < data.length; y++) {
      for (let x = 0; x < data[0].length; x++) {
        const tile = new Tile(x, y);
        if (this.isFoodPlace(tile)) {
          foods.push(new Food(tile));
        }
      }
    }
    return foods;
  }

  getFood(tile) {
    return this.foods.find((food) => food.tile.equal(tile));
  }

  visibleFoods(isVisible) {
    this.foods.forEach((food) => (food.isVisible = isVisible));
  }

  drawFoods() {
    this.foods.forEach((food) => food.draw());
  }

  removeFood(tile) {
    let food = this.getFood(tile);
    if (food != undefined && food.isVisible) {
      food.isVisible = false;
      return true;
    }
    return false;
  }

  countFoods() {
    let counter = 0;
    for (let i = 0; i < this.foods.length; i++) {
      if (this.foods[i].isVisible) {
        counter++;
      }
    }
    return counter;
  }

  createPowerFoods() {
    var powerFoods = [
      new PowerFood(new Tile(2, 6)),
      new PowerFood(new Tile(27, 6)),
      new PowerFood(new Tile(2, 26)),
      new PowerFood(new Tile(27, 26)),
    ];
    return powerFoods;
  }

  getPowerFood(tile) {
    return this.powerFoods.find((powerFood) => powerFood.tile.equal(tile));
  }

  visiblePowerFoods(isVisible) {
    this.powerFoods.forEach((powerfood) => (powerfood.isVisible = isVisible));
  }

  drawPowerFoods() {
    this.powerFoods.forEach((powerFood) => powerFood.draw());
  }

  removePowerFood(tile) {
    var powerFood = this.getPowerFood(tile);
    if (powerFood != undefined && powerFood.isVisible) {
      powerFood.isVisible = false;
      return true;
    }
    return false;
  }
}
