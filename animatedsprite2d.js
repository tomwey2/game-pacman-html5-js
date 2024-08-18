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
    this.currentFrame++;
    if (
      this.currentFrame >= this.spriteSheet.index.get(this.direction).length
    ) {
      this.currentFrame = 0;
      this.endOfAnimation();
    }
  }
}
