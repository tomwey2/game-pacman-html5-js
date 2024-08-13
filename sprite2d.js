class Sprite2D {
  constructor(pixel, speed, direction, actor, animationSpeed) {
    this.pixel = pixel;
    this.speed = speed;
    this.direction = direction;
    this.currentFrame = 0;
    this.spriteSheet = SPRITESHEET.actors.filter(
      (item) => item.actor == actor,
    )[0];
    this.isVisible = true;

    if (animationSpeed > 0) {
      setInterval(() => {
        this.changeAnimation();
      }, animationSpeed);
    }
  }

  endOfAnimation() {}

  changeAnimation() {
    if (!this.isVisible) return;
    this.currentFrame++;
    if (
      this.currentFrame >= this.spriteSheet.index.get(this.direction).length
    ) {
      this.currentFrame = 0;
      this.endOfAnimation();
    }
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
