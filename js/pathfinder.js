"use strict";
function tileNr(tile) {
  return tile.y * data.length + tile.x;
}

function dfs(startTile, targetTile, visited, path, maxDepht) {
  if (startTile.x < BOARD_XMIN || startTile.x > BOARD_XMAX) return false;
  if (startTile.y < BOARD_YMIN || startTile.y > BOARD_YMAX) return false;

  visited.push(tileNr(startTile));
  path.push(startTile);

  if (path.length > maxDepht) {
    return false;
  }
  if (startTile.equal(targetTile)) {
    return true;
  } else {
    var neighbors = shuffle(
      getNeighbours(startTile, true).filter(
        (tile) => !visited.includes(tileNr(tile)),
      ),
    );
    for (let i = 0; i < neighbors.length; i++) {
      if (dfs(neighbors[i], targetTile, visited, path, maxDepht)) {
        return true;
      } else {
        path.pop(neighbors[i]);
      }
    }
  }

  return false;
}
