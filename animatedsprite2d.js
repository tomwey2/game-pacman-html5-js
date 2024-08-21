class AnimatedSprite2D extends Sprite2D {
  constructor(pixel, direction, actor, animationSpeed) {
    super(pixel, direction, actor);
    setInterval(() => {
      this.changeAnimation();
    }, animationSpeed);
  }

  endOfAnimation() {}

  changeAnimation() {
    if (!this.isVisible) return;
    const spriteData = SPRITESHEET.actors.filter(
      (item) => item.actor == this.actor,
    )[0];
    this.currentFrame++;
    if (this.currentFrame >= spriteData.index.get(this.direction).length) {
      this.currentFrame = 0;
      this.endOfAnimation();
    }
  }
}
