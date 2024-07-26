// Game relevant constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSheet = document.getElementById("assets");
const GAME_BACKGROUND_COLOR = "black";

const fps = 60;

// Board relevant constants
const TILESIZE = 30;
const TILESPEED = TILESIZE / 5; // Ergebnis muss eine ganze Zahl sein

const BOARD_WALL_COLOR = "#342DCA";
const BOARD_WALL_INNER_COLOR = "black";

const SIMPLE_WALL_WIDTH = 4;
const DOUBLE_WALL_WIDTH = 10;
const BOARD_NUM_SIMPLE_WALL = 1;
const BOARD_NUM_DOUBLE_WALL = 2;
const BOARD_NUM_FOOD = 5;
const FOOD_SIZE = Math.trunc(TILESIZE / 3);

// Pacman relevant constants
const PACMAN_SIZE = Math.trunc(TILESIZE * 5 / 3);
const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_DOWN = 1;
