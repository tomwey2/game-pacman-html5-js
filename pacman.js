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
        this.px = x * TILESIZE;
        this.py = y * TILESIZE;
        this.speed = speed;
        this.board = board;
        this.direction = DIRECTION_RIGHT;
        this.nextDirection = DIRECTION_RIGHT;
        this.currentFrame = 0;
        this.currentFrameOffset = +1;
        this.frameCount = 2;
        this.width = TILESIZE;
        this.height = TILESIZE;

        setInterval(() => { this.changeAnimation();}, 75);
    }

    move() {
        this.changeDirectionIfPossible();
        if (!this.checkCollision()) {
            this.moveForwards();
            this.eat();
        }
    }

    eat() {
        if (this.isInbetween()) return;
        var x = this.getBoardX();
        var y = this.getBoardY();
        this.board.removeFood(x, y);
    }

    moveForwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.px += this.speed;
                break;
            case DIRECTION_UP:
                this.py -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.px -= this.speed;
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
        var nextx = this.getBoardX();
        var nexty = this.getBoardY();
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
        this.currentFrame++;
        if (this.currentFrame >= this.frameIndex.get(this.direction).length) {
            this.currentFrame = 0;
        }
    }

    draw() {
        drawText(20, 3, "y=" + parseInt(this.getBoardY()) + ", x=" + parseInt(this.getBoardX()), "yellow");
        let index = this.frameIndex.get(this.direction)[this.currentFrame];
        
        ctx.drawImage(
            spriteSheet,
            index * 30 + this.xoffset[index], this.yoffset[index], 30, 30, 
            this.px - 13, this.py - 11, this.width + 20, this.height + 20
        );
    }

    getBoardX() {
        return Math.trunc(this.px / TILESIZE);
    }

    getBoardY() {
        return Math.trunc(this.py / TILESIZE);
    }

    isInbetween() {
        return (this.px % TILESIZE != 0) || (this.py % TILESIZE != 0);
    }

}