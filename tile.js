class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equal(other) {
        return this.x == other.x && this.y == other.y;
    }

    up() {
        return new Tile(this.x, this.y - 1);
    }

    down() {
        return new Tile(this.x, this.y + 1);
    }

    right() {
        if (this.x == RIGHT_DOOR_TILE.x && this.y == RIGHT_DOOR_TILE.y) {
            return new Tile(LEFT_DOOR_TILE.x, LEFT_DOOR_TILE.y);
        } else {
            return new Tile(this.x + 1, this.y);
        }
    }
    left() {
        if (this.x == LEFT_DOOR_TILE.x && this.y == LEFT_DOOR_TILE.y) {
            return new Tile(RIGHT_DOOR_TILE.x, RIGHT_DOOR_TILE.y);
        } else {
            return new Tile(this.x - 1, this.y);
        }
    }
    leftUp() {
        return new Tile(this.x - 1, this.y - 1);
    }
    rightUp() {
        return new Tile(this.x + 1, this.y - 1);
    }
    rightDown() {
        return new Tile(this.x + 1, this.y + 1);
    }
    leftDown() {
        return new Tile(this.x - 1, this.y + 1);
    }

    neighbour(direction) {
        switch (direction) {
            case DIRECTION_RIGHT:
                return this.right();
            case DIRECTION_LEFT:
                return this.left();
            case DIRECTION_UP:
                return this.up();
            case DIRECTION_DOWN:
                return this.down();
        }
    }

    westPixel() {
        return new Pixel(this.x * TILESIZE, this.y * TILESIZE + TILESIZE / 2);
    }

    eastPixel() {
        return new Pixel(
            this.x * TILESIZE + TILESIZE,
            this.y * TILESIZE + TILESIZE / 2
        );
    }

    northPixel() {
        return new Pixel(this.x * TILESIZE + TILESIZE / 2, this.y * TILESIZE);
    }

    southPixel() {
        return new Pixel(
            this.x * TILESIZE + TILESIZE / 2,
            this.y * TILESIZE + TILESIZE
        );
    }

    centerPixel() {
        return new Pixel(
            this.x * TILESIZE + TILESIZE / 2,
            this.y * TILESIZE + TILESIZE / 2
        );
    }
}
