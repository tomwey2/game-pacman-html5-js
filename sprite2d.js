class Sprite2D {
  constructor(pixel, direction, actor) {
    this.pixel = pixel;
    this.direction = direction;
    this.currentFrame = 0;
    this.spriteSheet = SPRITESHEET.actors.filter(
      (item) => item.actor == actor,
    )[0];
    this.isVisible = true;
  }

  draw() {
    if (!this.isVisible) return;
    const index = this.spriteSheet.index.get(this.direction)[this.currentFrame];
    const sheetx =
      index * this.spriteSheet.spriteSizeInSheet +
      this.spriteSheet.offsetsInSheet[index].x;
    const sheety =
      this.spriteSheet.sheetRow * 30 + this.spriteSheet.offsetsInSheet[index].y;
    ctx.drawImage(
      spriteSheet,
      sheetx,
      sheety,
      this.spriteSheet.spriteSizeInSheet,
      this.spriteSheet.spriteSizeInSheet,
      this.pixel.x -
        this.spriteSheet.spriteSize / 2 +
        this.spriteSheet.offset.x,
      this.pixel.y -
        this.spriteSheet.spriteSize / 2 +
        this.spriteSheet.offset.y,
      this.spriteSheet.spriteSize,
      this.spriteSheet.spriteSize,
    );
  }
}
