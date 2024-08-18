class Food extends Sprite2D {
  constructor(tile) {
    var pixel = tile.centerPixel();
    super(pixel, DIRECTION_NONE, ACTOR_FOOD);
    this.tile = tile;
  }
}
