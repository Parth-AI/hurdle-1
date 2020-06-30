var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var players, player1, player2, player3, player4;
var gr1,gr2,gr3,gr4;
var img1;

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();

    gr1 = createSprite(1000,150,displayWidth*5,5);
    gr2 = createSprite(1000,350,displayWidth*5,5);
    gr3 = createSprite(1000,550,displayWidth*5,5);
    gr4 = createSprite(1000,750,displayWidth*5,5);

    player1.bounceOff(gr1);
    player2.bounceOff(gr2);
    player3.bounceOff(gr3);
    player4.bounceOff(gr4);

    drawSprites();
  }
  
}
