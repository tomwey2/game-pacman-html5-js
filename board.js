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
        [0,2,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,2,0],  // 6
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
        // todo
    }

    isWall(x, y) {
        return this.isSimpleWall(x, y) || this.isDoubleWall(x, y);
    }

    isSimpleWall(x, y) {
        return this.data[y][x] == numSimpleWall;
    }

    isDoubleWall(x, y) {
        return this.data[y][x] == numDoubleWall;
    }

    isHorizontalWall(x, y) {
        return this.isWall(x - 1, y) && this.isWall(x + 1, y);
    }

    isVerticalWall(x, y) {
        return this.isWall(x, y - 1) && this.isWall(x, y + 1);
    }

    isTopLeftWall(x, y) {
        return this.isWall(x, y + 1) && this.isWall(x + 1, y) && 
            !this.isWall(x - 1, y - 1) && !this.isWall(x, y - 1) && !this.isWall(x - 1, y);
    }

    isTopRightWall(x, y) {
        return this.isWall(x, y + 1) && this.isWall(x - 1, y) && 
            !this.isWall(x + 1, y - 1) && !this.isWall(x, y - 1) && !this.isWall(x + 1, y);
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
        return [x * tileSize, y * tileSize + tileSize / 2]
    }

    getEastPoint(x, y) {
        return [x * tileSize + tileSize, y * tileSize + tileSize / 2]
    }

    getNorthPoint(x, y) {
        return [x * tileSize + tileSize / 2, y * tileSize]
    }

    getSouthPoint(x, y) {
        return [x * tileSize + tileSize / 2, y * tileSize + tileSize]
    }

    getCenterPoint(x, y) {
        return [x * tileSize + tileSize / 2, y * tileSize + tileSize / 2]
    }

    drawSimpleWall (path) {
        if (path.length > 0) {
            drawLineSegment(path, wallColor, 2);
        }
    }

    drawDoubleWall (path) {
        if (path.length > 0) {
            drawLineSegment(path, wallColor, 8);
            drawLineSegment(path, wallInnerColor, 2);
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
}
