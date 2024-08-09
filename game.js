class Game {
    constructor() {
        this.board = new Board();
        this.pacman = new Pacman(PACMAN_START_TILE, PACMAN_TILESPEED);
        this.blinky = new Ghost(
            BLINKY_STARTTILE,
            GHOST_TILESPEED,
            ACTOR_BLINKY,
            dfs
        );
        this.pinky = new Ghost(
            PINKY_STARTTILE,
            GHOST_TILESPEED,
            ACTOR_PINKY,
            dfs
        );
        this.inky = new Ghost(INKY_STARTTILE, GHOST_TILESPEED, ACTOR_INKY, dfs);
        this.clyde = new Ghost(
            CLYDE_STARTTILE,
            GHOST_TILESPEED,
            ACTOR_CLYDE,
            dfs
        );
        this.ghosts = [this.blinky, this.pinky, this.inky, this.clyde];
        this.lives = 0;
        this.level = 0;
        this.score = 0;
        this.highscore = 1024;
    }

    init() {
        this.lives = GAME_START_LIVES;
        this.level = 1;
        this.score = 0;
    }

    start() {
        this.blinky.reset();
        this.pinky.reset();
        this.inky.reset();
        this.clyde.reset();
        for (var i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].isVisible = true;
        }
        this.draw();
    }

    loop() {
        this.update();
        this.draw();
    }

    update() {
        this.pacman.move();
        for (var i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].move();
        }
    }

    addScore(value) {
        this.score += value;
        if (this.score > this.highscore) {
            this.highscore = this.score;
        }
    }

    levelLost() {
        for (var i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].isVisible = false;
        }
        if (this.lives > 0) {
            this.lives--;
            setGameState(GAME_IS_READY);
        } else {
            setGameState(GAME_IS_OVER);
        }
    }

    isGhost(tile) {
        for (var i = 0; i < this.ghosts.length; i++) {
            var ghostTile = this.ghosts[i].pixel.getTile();
            if (tile.equal(ghostTile)) {
                return true;
            }
        }

        return false;
    }

    drawScore() {
        drawText(100, 40, "1UP", "white");
        drawText(100, 80, parseInt(this.score), "white");
        drawText(350, 40, "HIGH  SCORE", "white");
        drawText(350, 80, parseInt(this.highscore), "white");
    }

    drawReady() {
        drawText(400, 630, "Ready!", "yellow");
    }

    drawGameOver() {
        drawText(400, 630, "Game  Over", "red");
    }

    drawLives() {
        for (var live = 0; live < this.lives - 1; live++) {
            var index = this.pacman.spriteSheet.index.get(DIRECTION_LEFT)[1];
            ctx.drawImage(
                spriteSheet,
                index * 30 + this.pacman.spriteSheet.offsetsInSheet[index].x,
                this.pacman.spriteSheet.offsetsInSheet[index].y,
                30,
                30,
                3 * TILESIZE + live * TILESIZE * 2,
                34 * TILESIZE,
                PACMAN_SIZE,
                PACMAN_SIZE
            );
        }
    }

    draw() {
        drawFillRect(0, 0, canvas.width, canvas.height, GAME_BACKGROUND_COLOR);
        this.drawScore();
        this.drawLives();
        this.board.draw();
        this.pacman.draw();
        for (var i = 0; i < this.ghosts.length; i++) {
            this.ghosts[i].draw();
        }
        this.drawLives();
        if (gameState == GAME_IS_READY) {
            this.drawReady();
        }
        if (gameState == GAME_IS_OVER) {
            this.drawGameOver();
        }
    }
}
