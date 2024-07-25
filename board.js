// 36 x 28 Tiles
let board = [
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

function isWall(x, y) {
    return isSimpleWall(x, y) || isDoubleWall(x, y);
}

function isSimpleWall(x, y) {
    return board[y][x] == numSimpleWall;
}

function isDoubleWall(x, y) {
    return board[y][x] == numDoubleWall;
}

function isHorizontalWall(x, y) {
    return isWall(x - 1, y) && isWall(x + 1, y);
}

function isVerticalWall(x, y) {
    return isWall(x, y - 1) && isWall(x, y + 1);
}

function isTopLeftWall(x, y) {
    return isWall(x, y + 1) && isWall(x + 1, y) && 
        !isWall(x - 1, y - 1) && !isWall(x, y - 1) && !isWall(x - 1, y);
}

function isTopRightWall(x, y) {
    return isWall(x, y + 1) && isWall(x - 1, y) && 
        !isWall(x + 1, y - 1) && !isWall(x, y - 1) && !isWall(x + 1, y);
}

function isBottomLeftWall(x, y) {
    return isWall(x, y - 1) && isWall(x + 1, y) && 
    !isWall(x - 1, y) && !isWall(x, y + 1) && !isWall(x - 1, y + 1);
}

function isBottomRightWall(x, y) {
    return isWall(x, y - 1) && isWall(x - 1, y) && 
    !isWall(x + 1, y) && !isWall(x, y + 1) && !isWall(x + 1, y + 1);
}

function getWestPoint(x, y) {
    return [x * tileSize, y * tileSize + tileSize / 2]
}

function getEastPoint(x, y) {
    return [x * tileSize + tileSize, y * tileSize + tileSize / 2]
}

function getNorthPoint(x, y) {
    return [x * tileSize + tileSize / 2, y * tileSize]
}

function getSouthPoint(x, y) {
    return [x * tileSize + tileSize / 2, y * tileSize + tileSize]
}

function getCenterPoint(x, y) {
    return [x * tileSize + tileSize / 2, y * tileSize + tileSize / 2]
}

function drawSimpleWall (path) {
    if (path.length > 0) {
        drawLineSegment(path, wallColor, 2);
    }
}

function drawDoubleWall (path) {
    if (path.length > 0) {
        drawLineSegment(path, wallColor, 8);
        drawLineSegment(path, wallInnerColor, 2);
    }
}

function drawBoard() {
    for (var y = 0; y < board.length; y++) {
        for (var x = 0; x < board[0].length; x++) {
            if (isWall(x, y)) {
                let path = [];
                if (isHorizontalWall(x, y)) {
                    path = [getWestPoint(x, y), getEastPoint(x, y)];
                }
                if (isVerticalWall(x, y)) {
                    path = [getNorthPoint(x ,y), getSouthPoint(x ,y)];
                }
                if (isTopLeftWall(x, y)) {
                    path = [getSouthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)];
                }
                if (isTopRightWall(x, y)) {
                    path = [getSouthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)];
                }
                if (isBottomLeftWall(x, y)) {
                    path = [getNorthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)];
                }
                if (isBottomRightWall(x, y)) {
                    path = [getNorthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)];
                }
                if (isSimpleWall(x, y)) {
                    drawSimpleWall(path);
                }
                if (isDoubleWall(x, y)) {
                    drawDoubleWall(path);
                }
            }
        }
    }
}

