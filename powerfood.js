class PowerFood extends AnimatedSprite2D {
  constructor(tile, direction, actor, animationSpeed) {
    var centerPixel = tile.centerPixel();
    super(centerPixel, direction, actor, animationSpeed);
    this.tile = tile;
  }

  /*
  draw() {
    const pixel = this.tile.centerPixel();
    ctx.drawImage(
      spriteSheet,
      8,
      296,
      17,
      17,
      pixel.x - POWER_SIZE / 2,
      pixel.y - POWER_SIZE / 2,
      POWER_SIZE,
      POWER_SIZE,
    );
  }
  */
}
