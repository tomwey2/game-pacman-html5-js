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
        [0,2,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,2,0],
        [0,2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2,0],
        [0,2,2,2,2,2,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0,0],
        [0,0,0,0,0,0,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,0,0,0,0,0,0],
        [0,2,2,2,2,2,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,2,2,2,2,2,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],
        [0,2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2,0],
        [0,2,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2,0],
        [0,2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2,0],
        [0,2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2,0],
        [0,2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2,0],
        [0,2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2,0],
        [0,2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2,0],
        [0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0],
        [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ];

    constructor() {
        this.initFood()
    }

    isFood(x, y) {
        return this.data[y][x] == BOARD_NUM_FOOD;
    }

    isWall(x, y) {
        return this.isSimpleWall(x, y) || this.isDoubleWall(x, y);
    }

    isSimpleWall(x, y) {
        return this.data[y][x] == BOARD_NUM_SIMPLE_WALL;
    }

    isDoubleWall(x, y) {
        return this.data[y][x] == BOARD_NUM_DOUBLE_WALL;
    }

    isHorizontalWall(x, y) {
        return this.isWall(x - 1, y) && this.isWall(x + 1, y) &&
        (!this.isWall(x, y - 1) || !this.isWall(x, y + 1));
    }

    isVerticalWall(x, y) {
        return this.isWall(x, y - 1) && this.isWall(x, y + 1) &&
            (!this.isWall(x - 1, y) || !this.isWall(x + 1, y));
    }

    isTopLeftWall(x, y) {
        return this.isWall(x, y + 1) && this.isWall(x + 1, y) && 
            !this.isWall(x - 1, y - 1) && !this.isWall(x, y - 1) && !this.isWall(x - 1, y);
    }

    isTopRightWall(x, y) {
        return this.isWall(x, y + 1) && this.isWall(x - 1, y) && 
            !this.isWall(x + 1, y - 1) && !this.isWall(x, y - 1) && !this.isWall(x + 1, y) ||
            this.isWall(x, y + 1) && this.isWall(x - 1, y) && !this.isWall(x - 1, y + 1);
    }

    isBottomLeftWall(x, y) {
        return this.isWall(x, y - 1) && this.isWall(x + 1, y) && 
        !this.isWall(x - 1, y) && !this.isWall(x, y + 1) && !this.isWall(x - 1, y + 1);
    }

    isBottomRightWall(x, y) {
        return this.isWall(x, y - 1) && this.isWall(x - 1, y) && 
        !this.isWall(x + 1, y) && !this.isWall(x, y + 1) && !this.isWall(x + 1, y + 1);
    }

    getWestPoint(x, y) {
        return [x * TILESIZE, y * TILESIZE + TILESIZE / 2]
    }

    getEastPoint(x, y) {
        return [x * TILESIZE + TILESIZE, y * TILESIZE + TILESIZE / 2]
    }

    getNorthPoint(x, y) {
        return [x * TILESIZE + TILESIZE / 2, y * TILESIZE]
    }

    getSouthPoint(x, y) {
        return [x * TILESIZE + TILESIZE / 2, y * TILESIZE + TILESIZE]
    }

    getCenterPoint(x, y) {
        return [x * TILESIZE + TILESIZE / 2, y * TILESIZE + TILESIZE / 2]
    }

    drawSimpleWall (path) {
        if (path.length > 0) {
            drawLineSegment(path, BOARD_WALL_COLOR, SIMPLE_WALL_WIDTH);
        }
    }

    drawDoubleWall (path) {
        if (path.length > 0) {
            drawLineSegment(path, BOARD_WALL_COLOR, DOUBLE_WALL_WIDTH);
            drawLineSegment(path, BOARD_WALL_INNER_COLOR, SIMPLE_WALL_WIDTH);
        }
    }

    drawBoard() {
        for (var y = 0; y < this.data.length; y++) {
            for (var x = 0; x < this.data[0].length; x++) {
                if (this.isWall(x, y)) {
                    let path = [];
                    if (this.isHorizontalWall(x, y)) {
                        path = [this.getWestPoint(x, y), this.getEastPoint(x, y)];
                    }
                    if (this.isVerticalWall(x, y)) {
                        path = [this.getNorthPoint(x ,y), this.getSouthPoint(x ,y)];
                    }
                    if (this.isTopLeftWall(x, y)) {
                        path = [this.getSouthPoint(x ,y), this.getCenterPoint(x ,y), this.getEastPoint(x ,y)];
                    }
                    if (this.isTopRightWall(x, y)) {
                        path = [this.getSouthPoint(x ,y), this.getCenterPoint(x ,y), this.getWestPoint(x ,y)];
                    }
                    if (this.isBottomLeftWall(x, y)) {
                        path = [this.getNorthPoint(x ,y), this.getCenterPoint(x ,y), this.getEastPoint(x ,y)];
                    }
                    if (this.isBottomRightWall(x, y)) {
                        path = [this.getNorthPoint(x ,y), this.getCenterPoint(x ,y), this.getWestPoint(x ,y)];
                    }
                    if (this.isSimpleWall(x, y)) {
                        this.drawSimpleWall(path);
                    }
                    if (this.isDoubleWall(x, y)) {
                        this.drawDoubleWall(path);
                    }
                }
            }
        }
    }

    drawFood() {
        for (var y = 0; y < this.data.length; y++) {
            for (var x = 0; x < this.data[0].length; x++) {
                if (this.isFood(x, y)) {
                    var px = x * TILESIZE + 5;
                    var py = y * TILESIZE + 5;
                    var off = 0;
                    ctx.drawImage(spriteSheet, 45, 302, 5, 5, px + 0, py - 0, 10, 10);
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
                if (y > 3 && y < this.data.length - 3 && 
                    x > 0 && x < this.data[0].length - 2 && 
                    !(y > 12 && y < 22 && x > 0 && x < 7) &&
                    !(y > 12 && y < 22 && x > 22 && x < this.data[0].length - 2) &&
                    !(y > 15 && y < 19 && x > 11 && x < 18) &&
                    !(x >= 14 && x <= 15 && y == 26) &&
                    !this.isWall(x, y)) {
                    this.data[y][x] = BOARD_NUM_FOOD;
                }
            }
        }
    }

    removeFood(x, y) {
        this.data[y][x] = 0;
    }

}
