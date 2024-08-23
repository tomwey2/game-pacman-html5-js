class PowerFood extends AnimatedSprite2D {
  constructor(tile) {
    super(tile.centerPixel(), DIRECTION_NONE, ACTOR_POWERFOOD, 500);
    this.tile = tile;
  }
}

class PowerFoodImage extends Sprite2D {
  constructor(tile) {
    super(tile.centerPixel(), DIRECTION_NONE, ACTOR_POWERFOOD);
    this.tile = tile;
  }
}
