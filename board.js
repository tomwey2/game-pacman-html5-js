class Board {
// 36 x 28 Tiles
    data = [
    //                       1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2
    //   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 0
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 1
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 2
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],  // 3
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0],  // 4
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],  // 5
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],  // 6
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],  // 7
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],  // 8
        [0,2,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,2,0],  // 9
        [0,2,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,2,0],  // 10
        [0,2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2,0],  // 11
        [0,2,2,2,2,2,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,2,2,2,2,2,0],  // 12
        [0,0,0,0,0,0,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,0,0,0,0,0,0],  // 13
        [0,0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0,0],  // 14
        [0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0],  // 15
        [0,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,0],  // 16
        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],  // 17
        [0,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,0],  // 18
        [0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0],  // 19
        [0,0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0,0],  // 20
        [0,0,0,0,0,0,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,0,0,0,0,0,0],  // 21
        [0,2,2,2,2,2,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,2,2,2,2,2,0],  // 22
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0],  // 23
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],  // 24
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],  // 25
        [0,2,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,0],  // 26
        [0,2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2,0],  // 27
        [0,2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2,0],  // 28
        [0,2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2,0],  // 29
        [0,2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2,0],  // 30
        [0,2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2,0],  // 31
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],  // 32
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],  // 33
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 34
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]   // 35
    ];

    constructor() {
        this.initFood()
    }
    
    isFood(tile) {
        return this.data[tile.y][tile.x] == BOARD_NUM_FOOD;
    }

    isWall(tile) {
        return this.isSimpleWall(tile) || this.isDoubleWall(tile);
    }

    isSimpleWall(tile) {
        return this.data[tile.y][tile.x] == BOARD_NUM_SIMPLE_WALL;
    }

    isDoubleWall(tile) {
        return this.data[tile.y][tile.x] == BOARD_NUM_DOUBLE_WALL;
    }


    isHorizontalWall(tile) {
        return this.isWall(tileLeft(tile)) && this.isWall(tileRight(tile)) &&
        (!this.isWall(tileUp(tile)) || !this.isWall(tileDown(tile))) ||
        !this.isWall(tileUp(tile)) && !this.isWall(tileDown(tile));
    }

    isVerticalWall(tile) {
        return this.isWall(tileUp(tile)) && this.isWall(tileDown(tile)) &&
            (!this.isWall(tileLeft(tile)) || !this.isWall(tileRight(tile)));
    }

    isTopLeftWall(tile) {
        return this.isWall(tileDown(tile)) && this.isWall(tileRight(tile)) && 
            !this.isWall(tileLeftUp(tile)) && !this.isWall(tileUp(tile)) && !this.isWall(tileLeft(tile)) ||
            this.isWall(tileDown(tile)) && this.isWall(tileRight(tile)) && !this.isWall(tileRightDown(tile));
    }

    isTopRightWall(tile) {
        return this.isWall(tileDown(tile)) && this.isWall(tileLeft(tile)) && 
            !this.isWall(tileRightUp(tile)) && !this.isWall(tileUp(tile)) && !this.isWall(tileRight(tile)) ||
            this.isWall(tileDown(tile)) && this.isWall(tileLeft(tile)) && !this.isWall(tileLeftDown(tile));
    }

    isBottomLeftWall(tile) {
        return this.isWall(tileUp(tile)) && this.isWall(tileRight(tile)) && 
        !this.isWall(tileLeft(tile)) && !this.isWall(tileDown(tile)) && !this.isWall(tileLeftDown(tile)) ||
        this.isWall(tileUp(tile)) && this.isWall(tileRight(tile)) && !this.isWall(tileRightUp(tile));
    }

    isBottomRightWall(tile) {
        return this.isWall(tileUp(tile)) && this.isWall(tileLeft(tile)) && 
        !this.isWall(tileRight(tile)) && !this.isWall(tileDown(tile)) && !this.isWall(tileRightDown(tile)) ||
        this.isWall(tileLeft(tile)) && this.isWall(tileUp(tile)) && !this.isWall(tileLeftUp(tile));
    }

    drawSimpleWall (path) {
        if (path.length > 0) {
            drawLineSegment(path, BOARD_WALL_COLOR, SIMPLE_WALL_WIDTH);
        }
    }

    drawDoubleWall (path) {
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

    drawBoard() {
        for (var y = 0; y < this.data.length; y++) {
            for (var x = 0; x < this.data[0].length; x++) {
                const tile = {x: x, y: y};
                if (this.isWall(tile)) {
                    if (this.isHorizontalWall(tile)) {
                        this.drawWall(tile, [getWestPoint(tile), getEastPoint(tile)], false);
                    }
                    if (this.isVerticalWall(tile)) {
                        this.drawWall(tile, [getNorthPoint(tile), getSouthPoint(tile)], false);
                    }
                    if (this.isTopLeftWall(tile)) {
                        this.drawWall(tile, [getSouthPoint(tile), getCenterPoint(tile), getEastPoint(tile)], true);
                    }
                    if (this.isTopRightWall(tile)) {
                        this.drawWall(tile, [getSouthPoint(tile), getCenterPoint(tile), getWestPoint(tile)], true);
                    }
                    if (this.isBottomLeftWall(tile)) {
                        this.drawWall(tile, [getNorthPoint(tile), getCenterPoint(tile), getEastPoint(tile)], true);
                    }
                    if (this.isBottomRightWall(tile)) {
                        this.drawWall(tile, [getNorthPoint(tile), getCenterPoint(tile), getWestPoint(tile)], true);
                    }
                }
            }
        }
    }

    drawFood() {
        for (var y = 0; y < this.data.length; y++) {
            for (var x = 0; x < this.data[0].length; x++) {
                const tile = {x: x, y: y};
                if (this.isFood(tile)) {
                    const pixel = getCenterPoint(tile);
                    ctx.drawImage(spriteSheet, 45, 302, 5, 5, 
                        pixel.x - FOOD_SIZE / 2, pixel.y - FOOD_SIZE / 2, FOOD_SIZE, FOOD_SIZE);
                }
            }
        }
    }

    draw() {
        this.drawBoard();
        this.drawFood();
    }

    initFood() {
        for (var y = 0; y < this.data.length; y++) {
            for (var x = 0; x < this.data[0].length; x++) {
                var tile = {x: x, y: y};
                if (y > 3 && y < this.data.length - 3 && 
                    x > 0 && x < this.data[0].length - 2 && 
                    !(y > 12 && y < 22 && x > 0 && x < 7) &&
                    !(y > 12 && y < 22 && x > 22 && x < this.data[0].length - 2) &&
                    !(y > 15 && y < 19 && x > 11 && x < 18) &&
                    !(x >= 14 && x <= 15 && y == 26) &&
                    !this.isWall(tile)) {
                        this.data[tile.y][tile.x] = BOARD_NUM_FOOD;
                    }
            }
        }
    }

    removeFood(tile) {
        this.data[tile.y][tile.x] = 0;
    }

}
