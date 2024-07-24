// Game relevant constants
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const spriteSheet = document.getElementById("assets");

const fps = 60;

// Board relevant constants
const tileSize = 25;

const wallColor = "#342DCA";
const wallInnerColor = "black";
const gameBgColor = "black";

const wallWidth = 2;
const outerWallWidth = 8;
const numSimpleWall = 1;
const numDoubleWall = 2;

// Pacman relevant constants
const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_DOWN = 1;
