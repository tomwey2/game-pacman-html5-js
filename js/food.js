"use strict";
class Food extends Sprite2D {
  constructor(tile) {
    super(tile.centerPixel(), DIRECTION_NONE, ACTOR_FOOD);
    this.tile = tile;
  }
}
