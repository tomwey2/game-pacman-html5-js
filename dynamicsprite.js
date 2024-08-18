class DynamicSprite extends AnimatedSprite2D {
  constructor(pixel, direction, actor, speed, animationSpeed) {
    super(pixel, direction, actor, animationSpeed);
    this.speed = speed;
  }
}
