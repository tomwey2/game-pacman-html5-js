class DieingPacman extends Sprite2D {
  constructor(animationSpeed) {
    super(
      new Pixel(0, 0),
      0,
      DIRECTION_NONE,
      ACTOR_DIEING_PACMAN,
      animationSpeed,
    );
    this.isVisible = false;
  }

  endOfAnimation() {
    this.isVisible = false;
    if (game.lives > 0) {
      setGameState(GAME_IS_READY);
    } else {
      setGameState(GAME_IS_OVER);
    }
  }
}
