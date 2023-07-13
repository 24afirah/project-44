var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background_image-1-removebg-preview.png");
  rocket1_img = loadImage("../assets/rocket1.png");
  rocket2_img = loadImage("../assets/rocket2.png");
  track = loadImage("../assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
