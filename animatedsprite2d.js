class AnimatedSprite2D extends Sprite2D {
  constructor(pixel, direction, actor, animationSpeed) {
    super(pixel, direction, actor);
    this.animateDelay = setInterval(
      () => this.changeAnimation(),
      animationSpeed,
    );
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

  moveForwards(speed) {
    const tile = this.pixel.getTile();
    const cx = tile.centerPixel().x;
    const cy = tile.centerPixel().y;
    switch (this.direction) {
      case DIRECTION_RIGHT:
        if (tile.equal(RIGHT_DOOR_TILE)) {
          this.pixel = LEFT_DOOR_TILE.centerPixel();
        } else {
          if (this.pixel.x < cx && this.pixel.x + speed > cx) {
            this.pixel.x = cx;
          } else {
            this.pixel.x += speed;
          }
        }
        break;
      case DIRECTION_UP:
        if (this.pixel.y - speed < cy && this.pixel.y > cy) {
          this.pixel.y = cy;
        } else {
          this.pixel.y -= speed;
        }
        break;
      case DIRECTION_LEFT:
        if (tile.equal(LEFT_DOOR_TILE)) {
          this.pixel = RIGHT_DOOR_TILE.centerPixel();
        } else {
          if (this.pixel.x - speed < cx && this.pixel.x > cx) {
            this.pixel.x = cx;
          } else {
            this.pixel.x -= speed;
          }
        }
        break;
      case DIRECTION_DOWN:
        if (this.pixel.y < cy && this.pixel.y + speed > cy) {
          this.pixel.y = cy;
        } else {
          this.pixel.y += speed;
        }
        break;
    }
  }
}
