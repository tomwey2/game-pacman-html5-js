class Sprite2D {
    constructor(pixel, speed, direction, actor, animationSpeed) {
        this.pixel = pixel;
        this.speed = speed;
        this.direction = direction;
        this.currentFrame = 0;
        this.spriteSheet = SPRITESHEET.actors.filter(
            (item) => item.actor == actor
        )[0];
        this.isVisible = true;

        setInterval(() => {
            this.changeAnimation();
        }, animationSpeed);
    }

    changeAnimation() {
        this.currentFrame++;
        if (
            this.currentFrame >=
            this.spriteSheet.index.get(this.direction).length
        ) {
            this.currentFrame = 0;
        }
    }

    draw() {
        if (!this.isVisible) return;
        this.drawCoord(); // TODO: only for developing
        const index = this.spriteSheet.index.get(this.direction)[
            this.currentFrame
        ];
        const sheetx =
            index * this.spriteSheet.spriteSizeInSheet +
            this.spriteSheet.offsetsInSheet[index].x;
        const sheety =
            this.spriteSheet.sheetRow * this.spriteSheet.spriteSizeInSheet +
            this.spriteSheet.offsetsInSheet[index].y;
        ctx.drawImage(
            spriteSheet,
            sheetx,
            sheety,
            this.spriteSheet.spriteSizeInSheet,
            this.spriteSheet.spriteSizeInSheet,
            this.pixel.x -
                this.spriteSheet.spriteSize / 2 +
                this.spriteSheet.offset.x,
            this.pixel.y -
                this.spriteSheet.spriteSize / 2 +
                this.spriteSheet.offset.y,
            this.spriteSheet.spriteSize,
            this.spriteSheet.spriteSize
        );
    }
}
