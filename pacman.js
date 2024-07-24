class Pacman {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = DIRECTION_RIGHT;
        this.nextDirection = DIRECTION_RIGHT;
        this.currentFrame = 0;
        this.currentFrameOffset = +1;
        this.frameCount = 2;

        this.frameIndex = new Map([
            [DIRECTION_RIGHT, [2, 1, 0, 1]],
            [DIRECTION_LEFT, [2, 3, 4, 3]],
            [DIRECTION_UP, [2, 6, 5, 6]],
            [DIRECTION_DOWN, [2, 8, 7, 8]]
        ]);

        this.xoffset = [0, 2, 3, 4, 6, 8, 10, 12, 14];
        this.yoffset = [0, 0, 0, 0, 0, -1, -1, 1, 1];

        setInterval(() => { this.changeAnimation();}, 200);
    }

    move() {
        this.changeDirectionIfPossible();
        if (!this.checkCollision()) {
            this.moveForwards();
        }
    }

    eat() {

    }

    moveForwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x += this.speed;
                break;
            case DIRECTION_UP:
                this.y -= this.speed;
                break;
            case DIRECTION_LEFT:
                this.x -= this.speed;
                break;
            case DIRECTION_DOWN:
                this.y += this.speed;
                break;
        }
    }

    moveBackwards() {
        switch(this.direction) {
            case DIRECTION_RIGHT:
                this.x -= this.speed;
                break;
            case DIRECTION_UP:
                this.y += this.speed;
                break;
            case DIRECTION_LEFT:
                this.x += this.speed;
                break;
            case DIRECTION_DOWN:
                this.y -= this.speed;
                break;
        }
    }

    checkCollision() {
        let nextx = this.getBoardX();
        let nexty = this.getBoardY();
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

        if (isWall(nextx, nexty)) {
            return true; 
        }
        return false;
    }

    checkGhostCollision() {
        
    }

    changeDirectionIfPossible() {
        if (this.direction == this.nextDirection) return;
        if (this.isInbetween()) return;
        let tempDirection = this.direction;
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
            this.x - 13, this.y - 11, this.width + 20, this.height + 20
        );
    }

    getBoardX() {
        return Math.trunc(this.x / tileSize);
    }

    getBoardY() {
        return Math.trunc(this.y / tileSize);
    }

    isInbetween() {
        return (this.x % tileSize != 0) || (this.y % tileSize != 0);
    }

}