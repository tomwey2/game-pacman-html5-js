class Intro {
    constructor() {}

    loop() {
        this.draw();
    }

    draw() {
        drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
        game.drawScore();
        drawText(200, 200, "CHARACTER / NICKNAME", "white");
        drawText(200, 300, "- SHADOW", "red");
        drawText(500, 300, '"BLINKY"', "red");
        drawText(200, 400, "- SPEEDY", "purple");
        drawText(500, 400, '"PINKY"', "purple");
        drawText(200, 500, "- BASHFUL", "blue");
        drawText(500, 500, '"INKY"', "blue");
        drawText(200, 600, "- POKEY", "orange");
        drawText(500, 600, '"CLYDE"', "orange");
    }
}
