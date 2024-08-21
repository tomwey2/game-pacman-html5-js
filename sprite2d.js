class Sprite2D {
  constructor(pixel, direction, actor) {
    this.pixel = pixel;
    this.direction = direction;
    this.actor = actor;
    this.currentFrame = 0;
    this.isVisible = true;
  }

  draw() {
    if (!this.isVisible) return;
    const spriteData = SPRITESHEET.actors.filter(
      (item) => item.actor == this.actor,
    )[0];
    const index = spriteData.index.get(this.direction)[this.currentFrame];
    const sheetx =
      index * spriteData.spriteSizeInSheet + spriteData.offsetsInSheet[index].x;
    const sheety =
      spriteData.sheetRow * 30 + spriteData.offsetsInSheet[index].y;
    ctx.drawImage(
      spriteSheet,
      sheetx,
      sheety,
      spriteData.spriteSizeInSheet,
      spriteData.spriteSizeInSheet,
      this.pixel.x - spriteData.spriteSize / 2 + spriteData.offset.x,
      this.pixel.y - spriteData.spriteSize / 2 + spriteData.offset.y,
      spriteData.spriteSize,
      spriteData.spriteSize,
    );
  }
}
