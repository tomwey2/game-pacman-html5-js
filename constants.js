// Game relevant constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSheet = document.getElementById("spritesheet");
const GAME_BACKGROUND_COLOR = "black";
const GAME_START_LIVES = 5;

const fps = 60;

// Game states
const GAME_INIT = "GAME_INIT";
const GAME_IS_READY = "GAME_IS_READY";
const GAME_IS_RUNNING = "GAME_IS_RUNNING";
const LEVEL_IS_LOST = "LEVEL_IS_LOST";
const LEVEL_IS_WON = "LEVEL_IS_WON";
const GAME_IS_OVER = "GAME_IS_OVER";
const GAME_IS_PAUSED = "GAME_IS_PAUSED";

// Board relevant constants
const BOARD_XMIN = 2;
const BOARD_XMAX = 27;
const BOARD_YMIN = 4;
const BOARD_YMAX = 32;

const TILESIZE = 30;
const LEFT_DOOR_TILE = new Tile(1, 17);
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
const FOOD_WIDTH = Math.trunc(TILESIZE / 3.5);
const FOOD_HEIGHT = FOOD_WIDTH;
const POWERFOOD_WIDTH = Math.trunc(TILESIZE / 1.1);
const POWERFOOD_HEIGHT = POWERFOOD_WIDTH;

const PACMAN_START_TILE = new Tile(14, 26);
const PACMAN_NORMAL_SPEED = TILESIZE / 7;
const GHOST_NORMAL_SPEED = TILESIZE / 10;
const GHOST_FAST_SPEED = TILESIZE / 5;

// Pacman relevant constants
const PACMAN_WIDTH = Math.trunc((TILESIZE * 5) / 3);
const PACMAN_HEIGHT = PACMAN_WIDTH;

const PACMAN_STATE_NORMAL = 0;
const PACMAN_STATE_DYING = 1;
const PACMAN_ANIMATION_SPEED_NORMAL = 75;
const PACMAN_ANIMATION_SPEED_DYING = 200;

// Ghost relevant constants
const GHOST_WIDTH = Math.trunc((TILESIZE * 5) / 3);
const GHOST_HEIGHT = GHOST_WIDTH;
const BLINKY_STARTTILE = new Tile(14, 14);
const PINKY_STARTTILE = new Tile(14, 17);
const INKY_STARTTILE = new Tile(12, 17);
const CLYDE_STARTTILE = new Tile(16, 17);
const GHOST_ANIMATION_SPEED = 200;
const GHOST_MOVING_SPEED = 40;
const GHOST_DIE_SCORES = [200, 400, 800, 1600];

const GHOST_STATE_NORMAL = 0;
const GHOST_STATE_BLUE = 1;
const GHOST_STATE_WHITE = 2;
const GHOST_STATE_EYES = 3;
const GHOST_STATE_DIED = 4;

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
const ACTOR_FOOD = 6;
const ACTOR_POWERFOOD = 7;
const ACTOR_DYING_PACMAN = 8;
const ACTOR_BLUE_GHOST = 9;
const ACTOR_WHITE_GHOST = 10;
const ACTOR_EYES_GHOST = 11;
const ACTOR_POINTS_200 = 12;
const ACTOR_POINTS_400 = 13;
const ACTOR_POINTS_800 = 14;
const ACTOR_POINTS_1600 = 15;

const SPRITESHEET = {
  actors: [
    {
      actor: ACTOR_PACMAN,
      sheetRow: 0,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
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
      width: PACMAN_WIDTH,
      height: PACMAN_HEIGHT,
      offset: { x: 0, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [2, 1, 0, 1]],
        [DIRECTION_LEFT, [2, 3, 4, 3]],
        [DIRECTION_UP, [2, 6, 5, 6]],
        [DIRECTION_DOWN, [2, 8, 7, 8]],
      ]),
    },
    {
      actor: ACTOR_DYING_PACMAN,
      sheetRow: 1,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 0, y: 6 },
        { x: 2, y: 6 },
        { x: 4, y: 6 },
        { x: 6, y: 6 },
        { x: 8, y: 6 },
        { x: 10, y: 6 },
        { x: 12, y: 6 },
        { x: 14, y: 6 },
        { x: 16, y: 6 },
        { x: 18, y: 6 },
        { x: 20, y: 6 },
      ],
      width: PACMAN_WIDTH,
      height: PACMAN_HEIGHT,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]]),
    },
    {
      actor: ACTOR_BLINKY,
      sheetRow: 2,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 2, y: 6 },
        { x: 4, y: 6 },
        { x: 6, y: 7 },
        { x: 8, y: 7 },
        { x: 10, y: 6 },
        { x: 12, y: 6 },
        { x: 14, y: 6 },
        { x: 16, y: 6 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 2, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]],
        [DIRECTION_NONE, [4, 5]],
      ]),
    },
    {
      actor: ACTOR_PINKY,
      sheetRow: 3,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 2, y: 7 },
        { x: 4, y: 7 },
        { x: 6, y: 8 },
        { x: 8, y: 8 },
        { x: 10, y: 8 },
        { x: 12, y: 8 },
        { x: 14, y: 8 },
        { x: 16, y: 8 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 2, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]],
        [DIRECTION_NONE, [4, 5]],
      ]),
    },
    {
      actor: ACTOR_INKY,
      sheetRow: 4,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 2, y: 10 },
        { x: 4, y: 10 },
        { x: 6, y: 10 },
        { x: 8, y: 10 },
        { x: 10, y: 10 },
        { x: 12, y: 10 },
        { x: 14, y: 10 },
        { x: 16, y: 10 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 2, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]],
        [DIRECTION_NONE, [4, 5]],
      ]),
    },
    {
      actor: ACTOR_CLYDE,
      sheetRow: 5,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 2, y: 12 },
        { x: 4, y: 12 },
        { x: 6, y: 12 },
        { x: 8, y: 12 },
        { x: 10, y: 12 },
        { x: 12, y: 12 },
        { x: 14, y: 12 },
        { x: 16, y: 12 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 2, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [4, 5]],
        [DIRECTION_UP, [6, 7]],
        [DIRECTION_DOWN, [2, 3]],
        [DIRECTION_NONE, [4, 5]],
      ]),
    },
    {
      actor: ACTOR_POWERFOOD,
      sheetRow: 9,
      sheetCol: 0,
      sheetSpriteWidth: 20,
      sheetSpriteHeight: 20,
      sheetOffsets: [
        { x: 5, y: 25 },
        { x: 5, y: 25 },
      ],
      width: POWERFOOD_WIDTH,
      height: POWERFOOD_HEIGHT,
      offset: { x: -1, y: 1 },
      index: new Map([[DIRECTION_NONE, [0, 1]]]),
    },
    {
      actor: ACTOR_FOOD,
      sheetRow: 9,
      sheetCol: 1,
      sheetSpriteWidth: 5,
      sheetSpriteHeight: 5,
      sheetOffsets: [{ x: 15, y: 32 }],
      width: FOOD_WIDTH,
      height: FOOD_HEIGHT,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0]]]),
    },
    {
      actor: ACTOR_BLUE_GHOST,
      sheetRow: 7,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 1, y: 15 },
        { x: 3, y: 15 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 0, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [0, 1]],
        [DIRECTION_UP, [0, 1]],
        [DIRECTION_DOWN, [0, 1]],
        [DIRECTION_NONE, [0, 1]],
      ]),
    },
    {
      actor: ACTOR_WHITE_GHOST,
      sheetRow: 7,
      sheetCol: 2,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 30,
      sheetOffsets: [
        { x: 4, y: 15 },
        { x: 6, y: 15 },
      ],
      width: GHOST_WIDTH,
      height: GHOST_HEIGHT,
      offset: { x: 0, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0, 1]],
        [DIRECTION_LEFT, [0, 1]],
        [DIRECTION_UP, [0, 1]],
        [DIRECTION_DOWN, [0, 1]],
        [DIRECTION_NONE, [0, 1]],
      ]),
    },
    {
      actor: ACTOR_EYES_GHOST,
      sheetRow: 6,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 10,
      sheetOffsets: [
        { x: 0, y: 20 },
        { x: 0, y: 0 },
        { x: 4, y: 20 },
        { x: 0, y: 0 },
        { x: 6, y: 20 },
        { x: 0, y: 0 },
        { x: 10, y: 16 },
        { x: 0, y: 0 },
      ],
      width: GHOST_WIDTH,
      height: 10,
      offset: { x: 0, y: 0 },
      index: new Map([
        [DIRECTION_RIGHT, [0]],
        [DIRECTION_LEFT, [4]],
        [DIRECTION_UP, [6]],
        [DIRECTION_DOWN, [2]],
        [DIRECTION_NONE, [2]],
      ]),
    },
    {
      actor: ACTOR_POINTS_200,
      sheetRow: 10,
      sheetCol: 0,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 15,
      sheetOffsets: [{ x: 0, y: 28 }],
      width: 50,
      height: 25,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0]]]),
    },
    {
      actor: ACTOR_POINTS_400,
      sheetRow: 10,
      sheetCol: 1,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 15,
      sheetOffsets: [{ x: 2, y: 28 }],
      width: 50,
      height: 25,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0]]]),
    },
    {
      actor: ACTOR_POINTS_800,
      sheetRow: 10,
      sheetCol: 2,
      sheetSpriteWidth: 30,
      sheetSpriteHeight: 15,
      sheetOffsets: [{ x: 4, y: 28 }],
      width: 50,
      height: 25,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0]]]),
    },
    {
      actor: ACTOR_POINTS_1600,
      sheetRow: 10,
      sheetCol: 3,
      sheetSpriteWidth: 35,
      sheetSpriteHeight: 15,
      sheetOffsets: [{ x: 6, y: 28 }],
      width: 60,
      height: 25,
      offset: { x: 0, y: 0 },
      index: new Map([[DIRECTION_NONE, [0]]]),
    },
  ],
};
