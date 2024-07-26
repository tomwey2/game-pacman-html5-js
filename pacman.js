class Pacman {
    frameIndex = new Map([
        [DIRECTION_RIGHT, [2, 1, 0, 1]],
        [DIRECTION_LEFT, [2, 3, 4, 3]],
        [DIRECTION_UP, [2, 6, 5, 6]],
        [DIRECTION_DOWN, [2, 8, 7, 8]]
    ]);
    xoffset = [0, 2, 3, 4, 6, 8, 10, 12, 14];
    yoffset = [0, 0, 0, 0, 0, -1, -1, 1, 1];

    constructor(x, y, speed, board) {
        this.board = board;
        //this.px = x * TILESIZE;
        //this.py = y * TILESIZE;
        [this.px, this.py] = this.board.getCenterPoint(x, y);
        this.px += speed;
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
        if (this.isInbetween()) return;
        var x = this.getBoardX();
        var y = this.getBoardY();
        if (this.board.isFood(x, y)) {
            this.board.removeFood(x, y);
            addScore(10);
        }
    }

    moveForwards() {
        var [x, y] = [this.getBoardX(), this.getBoardY()];
        switch(this.direction) {
            case DIRECTION_RIGHT:
                if (x == 28 && y == 17) {
                    this.px = this.board.getCenterPoint(0, 17)[0];
                } else {
                    this.px += this.speed;
                }
                break;
            case DIRECTION_UP:
                this.py -= this.speed;
                break;
            case DIRECTION_LEFT:
                if (x == 0 && y == 17) {
                    this.px = this.board.getCenterPoint(28, 17)[0];
                } else {
                    this.px -= this.speed;
                }
                break;
            case DIRECTION_DOWN:
                this.py += this.speed;
                break;
        }

    }

    moveBackwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.px -= this.speed;
                break;
            case DIRECTION_UP:
                this.py += this.speed;
                break;
            case DIRECTION_LEFT:
                this.px += this.speed;
                break;
            case DIRECTION_DOWN:
                this.py -= this.speed;
                break;
        }
    }

    checkCollision() {
        if (this.isInbetween()) return;
        var [nextx, nexty] = [this.getBoardX(), this.getBoardY()];

        if (!this.isInbetween())  {
            switch (this.direction) {
                case DIRECTION_RIGHT:
                    nextx++; break;
                case DIRECTION_LEFT:
                    nextx--; break;
                case DIRECTION_UP:
                    nexty--; break;
                case DIRECTION_DOWN:
                    nexty++; break;
            }
        }
        if (this.board.isWall(nextx, nexty)) {
            return true; 
        }
        return false;
    }

    checkGhostCollision() {
        
    }

    changeDirectionIfPossible() {
        if (this.direction == this.nextDirection) return;
        if (this.isInbetween()) return;
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
        const [x, y] = [this.getBoardX(), this.getBoardY()];
        drawText(650, 80, "x=" + parseInt(x) + ",y=" + parseInt(y), "white");
    }

    draw() {
        this.drawCoord();
        var index = this.frameIndex.get(this.direction)[this.currentFrame];
        ctx.drawImage(
            spriteSheet,
            index * 30 + this.xoffset[index], this.yoffset[index], 30, 30, 
            this.px - PACMAN_SIZE / 2, this.py - PACMAN_SIZE / 2, PACMAN_SIZE, PACMAN_SIZE
        );
    }

    getBoardX() {
        return Math.trunc((this.px - TILESIZE / 2) / TILESIZE);
    }

    getBoardY() {
        return Math.trunc((this.py - TILESIZE / 2) / TILESIZE);
    }

    isInbetween() {
        return (Math.trunc(this.px - TILESIZE / 2) % TILESIZE != 0) || (Math.trunc(this.py - TILESIZE / 2) % TILESIZE != 0);
    }

}