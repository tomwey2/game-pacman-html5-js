function tileNr(tile) {
    return tile.y * this.board.data.length + tile.x; 
}

function bsf(startTile, targetTile, visited, path) {
    console.info("tile: " + tileNr(startTile) + " x=" + startTile.x + " y=" + startTile.y);
    if (startTile.x < BOARD_XMIN || startTile.x > BOARD_XMAX) return false;
    if (startTile.y < BOARD_YMIN || startTile.y > BOARD_YMAX) return false;
    
    visited.push(tileNr(startTile));
    path.push(startTile);
    
    if (startTile.x == targetTile.x && startTile.y == targetTile.y) {
        return true;
    }

    var neighbors = [];
    if (!this.board.isWall(tileUp(startTile)) && !visited.includes(tileNr(tileUp(startTile)))) {
        neighbors.push(tileUp(startTile));
    }
    if (!this.board.isWall(tileDown(startTile)) && !visited.includes(tileNr(tileDown(startTile)))) {
        neighbors.push(tileDown(startTile));
    }
    if (!this.board.isWall(tileLeft(startTile)) && !visited.includes(tileNr(tileLeft(startTile)))) {
        neighbors.push(tileLeft(startTile));
    }
    if (!this.board.isWall(tileRight(startTile)) && !visited.includes(tileNr(tileRight(startTile)))) {
        neighbors.push(tileRight(startTile));
    }

    if (neighbors == []) {
        return false; 
    }

    neighbors = shuffle(neighbors);
    for (var i = 0; i < neighbors.length; i++) {
        if (this.bsf(neighbors[i], targetTile, visited, path)) {
            return true;
        } else {
            path.pop(neighbors[i])
        }
    }

    return false;
}

