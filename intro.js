class Intro {
  constructor() {
    this.blinky = new Ghost(
      new Tile(4, 9),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_BLINKY,
      dfs
    );
    this.pinky = new Ghost(
      new Tile(4, 12),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_PINKY,
      dfs
    );
    this.inky = new Ghost(
      new Tile(4, 15),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_INKY,
      dfs
    );
    this.clyde = new Ghost(
      new Tile(4, 18),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_CLYDE,
      dfs
    );
  }

  loop() {
    this.draw();
  }

  draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
    game.drawScore();
    drawText(200, 200, "CHARACTER   /", "white");
    drawText(500, 200, "NICKNAME", "white");
    this.blinky.draw();
    drawText(200, 290, "- SHADOW", "red");
    drawText(500, 290, '"BLINKY"', "red");
    this.pinky.draw();
    drawText(200, 390, "- SPEEDY", "pink");
    drawText(500, 390, '"PINKY"', "pink");
    this.inky.draw();
    drawText(200, 475, "- BASHFUL", "turquoise");
    drawText(500, 475, '"INKY"', "turquoise");
    this.clyde.draw();
    drawText(200, 570, "- POKEY", "orange");
    drawText(500, 570, '"CLYDE"', "orange");
  }
}
