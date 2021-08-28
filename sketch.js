var canvas, backgroundImage;
var car1img, car2img, car3img, car4img, trackimg, groundimg
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car3, car1, car2, car4, cars;
var end23
function preload() {
  car1img = loadImage("./images/car1.png")
  car2img = loadImage("./images/car2.png")
  car3img = loadImage("./images/car3.png")
  car4img = loadImage("./images/car4.png")
  trackimg = loadImage("./images/track.jpg")
  groundimg = loadImage("./images/ground.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 80, displayHeight - 150);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }
  if (gameState === 2) {
    
    game.end();
  }
}
