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

    drawBoard() {
        for (var y = 0; y < data.length; y++) {
            for (var x = 0; x < data[0].length; x++) {
                const tile = new Tile(x, y);
                if (this.isWall(tile)) {
                    if (this.isHorizontalWall(tile)) {
                        this.drawWall(
                            tile,
                            [tile.westPixel(), tile.eastPixel()],
                            false
                        );
                    }
                    if (this.isVerticalWall(tile)) {
                        this.drawWall(
                            tile,
                            [tile.northPixel(), tile.southPixel()],
                            false
                        );
                    }
                    if (this.isTopLeftWall(tile)) {
                        this.drawWall(
                            tile,
                            [
                                tile.southPixel(),
                                tile.centerPixel(),
                                tile.eastPixel(),
                            ],
                            true
                        );
                    }
                    if (this.isTopRightWall(tile)) {
                        this.drawWall(
                            tile,
                            [
                                tile.southPixel(),
                                tile.centerPixel(),
                                tile.westPixel(),
                            ],
                            true
                        );
                    }
                    if (this.isBottomLeftWall(tile)) {
                        this.drawWall(
                            tile,
                            [
                                tile.northPixel(),
                                tile.centerPixel(),
                                tile.eastPixel(),
                            ],
                            true
                        );
                    }
                    if (this.isBottomRightWall(tile)) {
                        this.drawWall(
                            tile,
                            [
                                tile.northPixel(),
                                tile.centerPixel(),
                                tile.westPixel(),
                            ],
                            true
                        );
                    }
                } else if (this.isDoor(tile)) {
                    this.drawDoor([tile.westPixel(), tile.eastPixel()]);
                }
            }
        }
    }

    drawFood() {
        for (var y = 0; y < data.length; y++) {
            for (var x = 0; x < data[0].length; x++) {
                const tile = new Tile(x, y);
                if (this.isFood(tile)) {
                    const pixel = tile.centerPixel();
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
                const tile = new Tile(x, y);
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
