// Game relevant constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSheet = document.getElementById("assets");
const GAME_BACKGROUND_COLOR = "black";
const GAME_START_LIVES = 5;

const fps = 60;

// Board relevant constants
const BOARD_XMIN = 2;
const BOARD_XMAX = 27;
const BOARD_YMIN = 4;
const BOARD_YMAX = 32;

const TILESIZE = 30;
const LEFT_DOOR_TILE = new Tile(0, 17);
const RIGHT_DOOR_TILE = new Tile(28, 17);

const BOARD_WALL_COLOR = "#342DCA";
const BOARD_DOOR_COLOR = "orange";
const BOARD_WALL_INNER_COLOR = "black";

const SIMPLE_WALL_WIDTH = 4;
const DOUBLE_WALL_WIDTH = 10;
const DOOR_WIDTH = 6;
const BOARD_NUM_SIMPLE_WALL = 1;
const BOARD_NUM_DOUBLE_WALL = 2;
const BOARD_NUM_DOOR = 3;
const BOARD_NUM_FOOD = 5;
const FOOD_SIZE = Math.trunc(TILESIZE / 3);

const PACMAN_START_TILE = new Tile(14, 26);
const PACMAN_TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein
const GHOST_TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein

// Pacman relevant constants
const PACMAN_SIZE = Math.trunc((TILESIZE * 5) / 3);

// Ghost relevant constants
const GHOST_SIZE = Math.trunc((TILESIZE * 5) / 3);
const BLINKY_STARTTILE = new Tile(14, 14);
const PINKY_STARTTILE = new Tile(14, 17);
const INKY_STARTTILE = new Tile(12, 17);
const CLYDE_STARTTILE = new Tile(16, 17);

const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_DOWN = 1;
const DIRECTION_NONE = 0;

// Spritesheet constants
const ACTOR_PACMAN = 1;
const ACTOR_BLINKY = 2;
const ACTOR_PINKY = 3;
const ACTOR_INKY = 4;
const ACTOR_CLYDE = 5;

const SPRITESHEET = {
    actors: [
        {
            actor: ACTOR_PACMAN,
            sheetRow: 0,
            spriteSizeInSheet: 30,
            spriteSize: PACMAN_SIZE,
            offset: { x: 0, y: 0 },
            index: new Map([
                [DIRECTION_RIGHT, [2, 1, 0, 1]],
                [DIRECTION_LEFT, [2, 3, 4, 3]],
                [DIRECTION_UP, [2, 6, 5, 6]],
                [DIRECTION_DOWN, [2, 8, 7, 8]],
            ]),
            offsetsInSheet: [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 6, y: 0 },
                { x: 8, y: -1 },
                { x: 10, y: -1 },
                { x: 12, y: 1 },
                { x: 14, y: 1 },
            ],
        },
        {
            actor: ACTOR_BLINKY,
            sheetRow: 2,
            spriteSizeInSheet: 30,
            spriteSize: GHOST_SIZE,
            offset: { x: 2, y: 0 },
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]],
            ]),
            offsetsInSheet: [
                { x: 2, y: 6 },
                { x: 4, y: 6 },
                { x: 6, y: 7 },
                { x: 8, y: 7 },
                { x: 10, y: 6 },
                { x: 12, y: 6 },
                { x: 14, y: 6 },
                { x: 16, y: 6 },
            ],
        },
        {
            actor: ACTOR_PINKY,
            sheetRow: 3,
            spriteSizeInSheet: 30,
            spriteSize: GHOST_SIZE,
            offset: { x: 2, y: 0 },
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]],
            ]),
            offsetsInSheet: [
                { x: 2, y: 7 },
                { x: 4, y: 7 },
                { x: 6, y: 8 },
                { x: 8, y: 8 },
                { x: 10, y: 8 },
                { x: 12, y: 8 },
                { x: 14, y: 8 },
                { x: 16, y: 8 },
            ],
        },
        {
            actor: ACTOR_INKY,
            sheetRow: 4,
            spriteSizeInSheet: 30,
            spriteSize: GHOST_SIZE,
            offset: { x: 2, y: 0 },
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]],
            ]),
            offsetsInSheet: [
                { x: 2, y: 10 },
                { x: 4, y: 10 },
                { x: 6, y: 10 },
                { x: 8, y: 10 },
                { x: 10, y: 10 },
                { x: 12, y: 10 },
                { x: 14, y: 10 },
                { x: 16, y: 10 },
            ],
        },
        {
            actor: ACTOR_CLYDE,
            sheetRow: 5,
            spriteSizeInSheet: 30,
            spriteSize: GHOST_SIZE,
            offset: { x: 2, y: 0 },
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]],
            ]),
            offsetsInSheet: [
                { x: 2, y: 12 },
                { x: 4, y: 12 },
                { x: 6, y: 12 },
                { x: 8, y: 12 },
                { x: 10, y: 12 },
                { x: 12, y: 12 },
                { x: 14, y: 12 },
                { x: 16, y: 12 },
            ],
        },
    ],
};
