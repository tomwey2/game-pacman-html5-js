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
const LEFT_DOOR_TILE = {x: 0, y: 17};
const RIGHT_DOOR_TILE = {x: 28, y: 17};

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

const PACMAN_START_TILE = {x: 14, y: 26};
const PACMAN_TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein
const GHOST_START_TILE = {x: 14, y: 14};
const GHOST_TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein

// Pacman relevant constants
const PACMAN_SIZE = Math.trunc(TILESIZE * 5 / 3);

// Ghost relevant constants
const GHOST_SIZE = Math.trunc(TILESIZE * 5 / 3);

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
            spriteRow: 0,
            index: new Map([
                [DIRECTION_RIGHT, [2, 1, 0, 1]],
                [DIRECTION_LEFT, [2, 3, 4, 3]],
                [DIRECTION_UP, [2, 6, 5, 6]],
                [DIRECTION_DOWN, [2, 8, 7, 8]]
            ]),
            offsets: [
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
        },
        {
            actor: ACTOR_BLINKY,
            spriteRow: 2,
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]]
            ]),
            offsets: [
                {x: 2, y: 6},
                {x: 4, y: 6},
                {x: 6, y: 7},
                {x: 8, y: 7},
                {x: 10, y: 6},
                {x: 12, y: 6},
                {x: 14, y: 6},
                {x: 16, y: 6}
            ]
        },
        {
            actor: ACTOR_PINKY,
            spriteRow: 3,
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]]
            ]),
            offsets: [
                {x: 2, y: 7},
                {x: 4, y: 7},
                {x: 6, y: 8},
                {x: 8, y: 8},
                {x: 10, y: 8},
                {x: 12, y: 8},
                {x: 14, y: 8},
                {x: 16, y: 8}
            ]
        },
        {
            actor: ACTOR_INKY,
            spriteRow: 4,
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]]
            ]),
            offsets: [
                {x: 2, y: 10},
                {x: 4, y: 10},
                {x: 6, y: 10},
                {x: 8, y: 10},
                {x: 10, y: 10},
                {x: 12, y: 10},
                {x: 14, y: 10},
                {x: 16, y: 10}
            ]
        },
        {
            actor: ACTOR_CLYDE,
            spriteRow: 5,
            index: new Map([
                [DIRECTION_RIGHT, [0, 1]],
                [DIRECTION_LEFT, [4, 5]],
                [DIRECTION_UP, [6, 7]],
                [DIRECTION_DOWN, [2, 3]],
                [DIRECTION_NONE, [4, 5]]
            ]),
            offsets: [
                {x: 2, y: 12},
                {x: 4, y: 12},
                {x: 6, y: 12},
                {x: 8, y: 12},
                {x: 10, y: 12},
                {x: 12, y: 12},
                {x: 14, y: 12},
                {x: 16, y: 12}
            ]
        }
    ]
}
