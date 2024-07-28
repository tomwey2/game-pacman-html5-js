class Pacman {
    frameIndex = new Map([
        [DIRECTION_RIGHT, [2, 1, 0, 1]],
        [DIRECTION_LEFT, [2, 3, 4, 3]],
        [DIRECTION_UP, [2, 6, 5, 6]],
        [DIRECTION_DOWN, [2, 8, 7, 8]]
    ]);
    frameOffset = [
        {x: 0, y: 0},
        {x: 2, y: 0},
        {x: 3, y: 0},
        {x: 4, y: 0},
        {x: 6, y: 0},
        {x: 8, y: -1},
        {x: 10, y: -1},
        {x: 12, y: 1},
        {x: 14, y: 1}
    ]

    constructor(startTile, speed, board) {
        this.board = board;
        this.pixel = getCenterPoint(startTile);
        this.pixel.x += speed;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.nextDirection = DIRECTION_RIGHT;
        this.currentFrame = 0;
        this.currentFrameOffset = +1;
        this.frameCount = 2;
        this.isMoving = false;        

        setInterval(() => { this.changeAnimation();}, 75);
    }

    move() {
        if (!this.isMoving) return;
        this.changeDirectionIfPossible();

        if (!this.checkCollision()) {
            this.moveForwards();
            this.eat();
        }
        this.eat();
    }

    eat() {
        if (betweenTile(this.pixel)) return;
        const tile = getTile(this.pixel);
        if (this.board.isFood(tile)) {
            this.board.removeFood(tile);
            addScore(10);
        }
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

    moveBackwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.pixel.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.pixel.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.pixel.x += this.speed;
                break;
            case DIRECTION_DOWN:
                this.pixel.y -= this.speed;
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

    checkGhostCollision() {
        
    }

    changeDirectionIfPossible() {
        if (this.direction == this.nextDirection) return;
        if (betweenTile(this.pixel)) return;
        var tempDirection = this.direction;
        this.direction = this.nextDirection;
        if (this.checkCollision()) {
            this.direction = tempDirection;
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
        drawText(650, 80, "x=" + parseInt(tile.x) + ",y=" + parseInt(tile.y), "white");
    }

    draw() {
        this.drawCoord();   // TODO: only for developing
        var index = this.frameIndex.get(this.direction)[this.currentFrame];
        ctx.drawImage(
            spriteSheet,
            index * 30 + this.frameOffset[index].x, this.frameOffset[index].y, 30, 30, 
            this.pixel.x - PACMAN_SIZE / 2, this.pixel.y - PACMAN_SIZE / 2, PACMAN_SIZE, PACMAN_SIZE
        );
    }

}