class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getTile() {
    return new Tile(
      Math.floor((this.x - (this.x % TILESIZE)) / TILESIZE),
      Math.floor((this.y - (this.y % TILESIZE)) / TILESIZE),
    );
  }

  isCenter() {
    return (
      Math.trunc(this.x - TILESIZE / 2) % TILESIZE == 0 &&
      Math.trunc(this.y - TILESIZE / 2) % TILESIZE == 0
    );
  }
}
