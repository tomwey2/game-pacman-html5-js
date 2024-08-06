class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   getTile() {
    var offset = {
      x: Math.trunc(this.x - TILESIZE / 2) % TILESIZE,
      y: Math.trunc(this.y - TILESIZE / 2) % TILESIZE,
    };
    return new Tile(
      Math.floor((this.x - offset.x) / TILESIZE),
      Math.floor((this.y - offset.y) / TILESIZE),
    );
  }
  
   isCenter() {
    return (
      Math.trunc(this.x - TILESIZE / 2) % TILESIZE == 0 &&
      Math.trunc(this.y - TILESIZE / 2) % TILESIZE == 0
    );
  }
  
}
