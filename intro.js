class Intro {
  constructor() {
    this.blinky = new Ghost(
      new Tile(4, 9),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_BLINKY,
      0,
      dfs,
    );
    this.pinky = new Ghost(
      new Tile(4, 12),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_PINKY,
      0,
      dfs,
    );
    this.inky = new Ghost(
      new Tile(4, 15),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_INKY,
      0,
      dfs,
    );
    this.clyde = new Ghost(
      new Tile(4, 18),
      GHOST_TILESPEED,
      DIRECTION_RIGHT,
      ACTOR_CLYDE,
      0,
      dfs,
    );
    this.powerFood = new PowerFood(
      new Tile(10, 27),
      DIRECTION_NONE,
      ACTOR_POWERFOOD,
      0,
    );
    this.food = new Food(new Tile(10, 25));
  }

  loop() {
    this.draw();
  }

  draw() {
    drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
    game.drawScore();
    drawText(200, 200, "CHARACTER /", "white");
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
    //drawFood(new Tile(10, 25));
    this.food.draw();
    drawText(370, 775, "10 PTS", "white");
    this.powerFood.draw();
    drawText(370, 838, "50 PTS", "white");
    drawText(140, 950, "(c) 1980 MIDWAY MFG. CO.", "white");
    drawText(60, 1070, "CREDIT  0", "white");
  }
}
