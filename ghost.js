//const { dijkstra } = require("./dijkstra");

class Ghost {
    frameIndex = new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]]
    ]);
    frameOffset = [
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 0, y: 0},
        {x: 10, y: 7},
        {x: 12, y: 7},
        {x: 0, y: 0},
        {x: 0, y: 0}
    ]
    constructor(startTile, speed, board, pacman) {
        this.pixel = getCenterPoint(startTile);
        this.speed = speed;
        this.board = board;
        this.pacman = pacman;
        this.isMoving = true;
        this.direction = DIRECTION_LEFT;
        this.currentFrame = 0;

        this.makePath();

        setInterval(() => { this.changeAnimation();}, 200);
    }

    makePath() {
        var tile = getTile(this.pixel); 
    }

    move() {

    }

    checkCollision() {
    
    }

    changeAnimation() {
        if (!this.isMoving) {
            this.currentFrame = 0;
        } else {
            this.currentFrame++;
            if (this.currentFrame >= this.frameIndex.get(this.direction).length) {
                this.currentFrame = 0;
            }
        }
    }

    draw() {
        var index = this.frameIndex.get(this.direction)[this.currentFrame];
        ctx.drawImage(
            spriteSheet,
            index * 30 + this.frameOffset[index].x, 2 * 30 + this.frameOffset[index].y, 30, 30, 
            this.pixel.x - GHOST_SIZE / 2, this.pixel.y - GHOST_SIZE / 2, GHOST_SIZE, GHOST_SIZE
        );
    }
}