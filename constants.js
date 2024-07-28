// Game relevant constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSheet = document.getElementById("assets");
const GAME_BACKGROUND_COLOR = "black";
const GAME_START_LIVES = 5;

const fps = 60;

// Board relevant constants
const TILESIZE = 30;
const LEFT_DOOR_TILE = {x: 0, y: 17};
const RIGHT_DOOR_TILE = {x: 28, y: 17};

const BOARD_WALL_COLOR = "#342DCA";
const BOARD_WALL_INNER_COLOR = "black";

const SIMPLE_WALL_WIDTH = 4;
const DOUBLE_WALL_WIDTH = 10;
const BOARD_NUM_SIMPLE_WALL = 1;
const BOARD_NUM_DOUBLE_WALL = 2;
const BOARD_NUM_FOOD = 5;
const FOOD_SIZE = Math.trunc(TILESIZE / 3);

const PACMAN_START_TILE = {x: 14, y: 26};
const PACMAN_TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein

// Pacman relevant constants
const PACMAN_SIZE = Math.trunc(TILESIZE * 5 / 3);
const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_DOWN = 1;
