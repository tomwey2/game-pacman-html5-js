//const { dijkstra } = require("./dijkstra");

class Ghost {
    frameIndex = new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]],
        [DIRECTION_NONE, [4, 5]]
    ]);
    frameOffset = [
        {x: 2, y: 6},
        {x: 4, y: 6},
        {x: 6, y: 6},
        {x: 8, y: 6},
        {x: 10, y: 6},
        {x: 12, y: 6},
        {x: 14, y: 6},
        {x: 16, y: 6}
    ]
    constructor(startTile, speed, board, pacman) {
        this.pixel = getCenterPoint(startTile);
        this.speed = speed;
        this.board = board;
        this.pacman = pacman;
        this.isMoving = true;
        this.direction = DIRECTION_NONE;
        this.currentFrame = 0;
        this.path = [];
        this.isMoving = false;

        //this.newPath();

        setInterval(() => { this.changeAnimation();}, 200);
        setInterval(() => { this.newPath();}, 5000);
    }

    move() {
        if (!this.isMoving) return;
        this.changeDirectionIfPossible();

        if (!this.checkCollision()) {
            this.moveForwards()
        }
    }

    newPath() {
        if (!this.isMoving) return;
        if (betweenTile(this.pixel)) return;
        this.path = []
        if (bsf(getTile(this.pixel), getTile(this.pacman.pixel), [], this.path)) {
            console.info("gefunden");
        }
        console.info(this.path);
    }

    moveForwards() {
        const tile = getTile(this.pixel);
        switch(this.direction) {
            case DIRECTION_RIGHT:
                if (tile.x == RIGHT_DOOR_TILE.x && tile.y == RIGHT_DOOR_TILE.y) {
                    this.pixel = getCenterPoint(LEFT_DOOR_TILE);
                } else {
                    this.pixel.x += this.speed;
                }
                break;
            case DIRECTION_UP:
                this.pixel.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                if (tile.x == LEFT_DOOR_TILE.x && tile.y == LEFT_DOOR_TILE.y) {
                    this.pixel = getCenterPoint(RIGHT_DOOR_TILE);
                } else {
                    this.pixel.x -= this.speed;
                }
                break;
            case DIRECTION_DOWN:
                this.pixel.y += this.speed;
                break;
        }
    }

    checkCollision() {
        if (betweenTile(this.pixel)) return;
        var nextTile = getTile(this.pixel);

        switch (this.direction) {
            case DIRECTION_RIGHT:
                nextTile.x++; break;
            case DIRECTION_LEFT:
                nextTile.x--; break;
            case DIRECTION_UP:
                nextTile.y--; break;
            case DIRECTION_DOWN:
                nextTile.y++; break;
        }

        if (this.board.isWall(nextTile)) {
            return true; 
        }
        return false;
    }

    changeDirectionIfPossible() {
        const tile = getTile(this.pixel);
        if (!betweenTile(this.pixel)) {
            //this.direction = DIRECTION_NONE;
            if (this.path.length > 0) {
                const next = this.path.shift();
                //this.pixel = getCenterPoint(next);
                if (next.x < tile.x) {
                    this.direction = DIRECTION_LEFT;
                }
                if (next.x > tile.x) {
                    this.direction = DIRECTION_RIGHT;
                }
                if (next.y < tile.y) {
                    this.direction = DIRECTION_UP;
                }
                if (next.y > tile.y) {
                    this.direction = DIRECTION_DOWN;
                }
            }
        }
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

    drawCoord() {
        const tile = getTile(this.pixel);
        drawText(650, 40, "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y), "red");
    }

    draw() {
        this.drawCoord();
        var index = this.frameIndex.get(this.direction)[this.currentFrame];
        ctx.drawImage(
            spriteSheet,
            index * 30 + this.frameOffset[index].x, 2 * 30 + this.frameOffset[index].y, 30, 30, 
            this.pixel.x - GHOST_SIZE / 2, this.pixel.y - GHOST_SIZE / 2, GHOST_SIZE, GHOST_SIZE
        );
    }
}