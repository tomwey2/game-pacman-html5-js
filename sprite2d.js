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
      spriteData.sheetCol * 30 +
      index * spriteData.sheetSpriteWidth +
      spriteData.sheetOffsets[index].x;
    const sheety = spriteData.sheetRow * 30 + spriteData.sheetOffsets[index].y;
    ctx.drawImage(
      spriteSheet,
      sheetx,
      sheety,
      spriteData.sheetSpriteWidth,
      spriteData.sheetSpriteHeight,
      this.pixel.x - spriteData.width / 2 + spriteData.offset.x,
      this.pixel.y - spriteData.height / 2 + spriteData.offset.y,
      spriteData.width,
      spriteData.height,
    );
    // this.drawCenterCross();
  }

  drawCenterCross() {
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(this.pixel.x - 5, this.pixel.y);
    ctx.lineTo(this.pixel.x + 5, this.pixel.y);
    ctx.moveTo(this.pixel.x, this.pixel.y - 5);
    ctx.lineTo(this.pixel.x, this.pixel.y + 5);
    ctx.stroke();
  }
}
