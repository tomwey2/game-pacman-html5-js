class Intro {
  constructor() {
    this.blinky = new GhostImage(new Tile(4, 9), ACTOR_BLINKY);
    this.pinky = new GhostImage(new Tile(4, 12), ACTOR_PINKY);
    this.inky = new GhostImage(new Tile(4, 15), ACTOR_EATEN_GHOST);
    this.inky.direction = DIRECTION_RIGHT;
    this.clyde = new GhostImage(new Tile(4, 18), ACTOR_CLYDE);
    this.powerFood = new StaticPowerFood(new Tile(10, 27));
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
    this.food.draw();
    drawText(370, 775, "10 PTS", "white");
    this.powerFood.draw();
    drawText(370, 838, "50 PTS", "white");
    drawText(140, 950, "(c) 1980 MIDWAY MFG. CO.", "white");
    drawText(60, 1070, "CREDIT  0", "white");
  }
}
