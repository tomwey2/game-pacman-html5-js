// 36 x 28 Tiles
let board = [
//                       1 1 1 1 1 1 1 1 1 1 2 2 2 2 2 2 2 2
//   0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7   
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 0
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 1
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],  // 2
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],  // 3
    [2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2],  // 4
    [2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2],  // 5
    [2,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,2],  // 6
    [2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2],  // 7
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],  // 8
    [2,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,2],  // 9
    [2,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,2],
    [2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,2,2,2,2,2],
    [0,0,0,0,0,2,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0],
    [2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2],
    [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
    [2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2],
    [0,0,0,0,0,2,0,1,1,0,2,2,2,2,2,2,2,2,0,1,1,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,2,0,0,0,0,0],
    [0,0,0,0,0,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,0,0,0,0,0],
    [2,2,2,2,2,2,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,2,2,2,2,2,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2],
    [2,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,2],
    [2,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,2],
    [2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2],
    [2,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,2],
    [2,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2],
    [2,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,2],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
let xMax = board[0].length - 1;
let yMax = board.length - 1;

function isWall(x, y) {
    return isSimpleWall(x, y) || isDoubleWall(x, y);
}

function isSimpleWall(x, y) {
    return board[y][x] == numSimpleWall;
}

function isDoubleWall(x, y) {
    return board[y][x] == numDoubleWall;
}

function isHorizontalWall(x, y, v) {
    return (y > 0 && x == 0 && board[y][0] == v && board[y][2] == v && board[y - 1][0] != v && board[y + 1][0] != v) ||
    (y > 0 && x == xMax && board[y][x] == v && board[y][x - 1] == v && board[y - 1][x] != v && board[y + 1][x] != v) ||
    ((x > 0 && x < xMax && board[y][x] == v && board[y][x - 1] == v && board[y][x + 1] == v) 
    && (y > 0 && board[y - 1][x] != v || board[y + 1][x] != v));
}

function isVerticalWall(x, y, v) {
    return y > 0 && y < yMax && 
    (board[y][x - 1] != v || board[y][x + 1] != v) &&
    board[y][x] == v && board[y - 1][x] == v && board[y + 1][x] == v;
}

function isTopLeftWall(x, y, v) {
    return (x == 0 && y == 0 && board[y][x] == 1) || 
    (y > 0 && y < yMax) && 
    ((board[y][x] == v && board[y][x + 1] == v && board[y + 1][x] == v && board[y - 1][x] != v && board[y][x - 1] != v)
    ||
     (  board[y-1][x-1] == v && board[y-1][x] == v && board[y-1][x+1] == v &&
        board[y  ][x-1] == v && board[y  ][x] == v && board[y  ][x+1] == v &&
        board[y+1][x-1] == v && board[y+1][x] == v && board[y+1][x+1] != v));
}

function isTopRightWall(x, y, v) {
    return (x == xMax && y == 0 && board[y][x] == 1) || 
    (y > 0 && y < yMax && x > 0) &&
    ((board[y][x] == v && board[y][x - 1] == v && board[y + 1][x] == v && board[y][x + 1] != v && board[y - 1][x] != v)
    ||
     (  board[y-1][x-1] == v && board[y-1][x] == v && board[y-1][x+1] == v &&
        board[y  ][x-1] == v && board[y  ][x] == v && board[y  ][x+1] == v &&
        board[y+1][x-1] != v && board[y+1][x] == v && board[y+1][x+1] == v));
}

function isBottomLeftWall(x, y, v) {
    return (y == yMax && x == 0 && board[y][x] == v) ||
    (y > 0) &&
    ((board[y-1][x  ] == v &&
     board[y-1][x-1] != v && board[y  ][x] == v && board[y  ][x+1] == v &&
     board[y+1][x] != v) 
    ||
     (  board[y-1][x-1] == v && board[y-1][x] == v && board[y-1][x+1] != v &&
        board[y  ][x-1] == v && board[y  ][x] == v && board[y  ][x+1] == v &&
        board[y+1][x-1] == v && board[y+1][x] == v && board[y+1][x+1] == v)
    ||
     (  x == 0 &&
        board[y-1][x] == v && board[y-1][x+1] != v &&
        board[y  ][x] == v && board[y  ][x+1] == v &&
        board[y+1][x] != v && board[y+1][x+1] != v));
}

function isBottomRightWall(x, y, v) {
    return (x == xMax && y == yMax && board[y][x] == v) || 
    (x > 0 && y > 0) && 
    ((board[y][x] == v && board[y][x - 1] == v && board[y - 1][x] == v && board[y][x + 1] != v && board[y + 1][x] != v)
    ||
     (  board[y-1][x-1] != v && board[y-1][x] == v && board[y-1][x+1] == v &&
        board[y  ][x-1] == v && board[y  ][x] == v && board[y  ][x+1] == v &&
        board[y+1][x-1] == v && board[y+1][x] == v && board[y+1][x+1] == v));
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
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (isWall(x, y)) {
                let path = [];
                if (isHorizontalWall(x, y, board[y][x])) {
                    path = [getWestPoint(x, y), getEastPoint(x, y)];
                }
                if (isVerticalWall(x, y, numSimpleWall)) {
                    path = [getNorthPoint(x ,y), getSouthPoint(x ,y)];
                }
                if (isSimpleWall(x, y)) {
                    drawSimpleWall(path);
                }
                if (isDoubleWall(x, y)) {
                    drawDoubleWall(path);
                }
            }

            if (isSimpleWall(x, y)) {
                if (isHorizontalWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getWestPoint(x, y), getEastPoint(x, y)]);
                }
                if (isVerticalWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getNorthPoint(x ,y), getSouthPoint(x ,y)]);
                }
                if (isTopLeftWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getSouthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)]);
                }
                if (isTopRightWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getSouthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)]);
                }
                if (isBottomLeftWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getNorthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)]);
                }
                if (isBottomRightWall(x, y, numSimpleWall)) {
                    drawSimpleWall([getNorthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)]);
                }
            }
            if (isDoubleWall(x, y)) {
                if (isHorizontalWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getWestPoint(x, y), getEastPoint(x, y)]);
                }
                if (isVerticalWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getNorthPoint(x ,y), getSouthPoint(x ,y)]);
                }
                if (isTopLeftWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getSouthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)]);
                }
                if (isTopRightWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getSouthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)]);
                }
                if (isBottomLeftWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getNorthPoint(x ,y), getCenterPoint(x ,y), getEastPoint(x ,y)]);
                }
                if (isBottomRightWall(x, y, numDoubleWall)) {
                    drawDoubleWall([getNorthPoint(x ,y), getCenterPoint(x ,y), getWestPoint(x ,y)]);
                }
            }
        }
    }
}

