
var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 250;
var score =0;
var img1, img2, img3, img4, img5, img6, img7, beginImg;
var  c; // our text color as a variable, set in setup
var gameState ="begin";


function preload() {
  
  beginImg = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/lachancla.jpg');
  img2 = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/cartoonduck.png');
  img3 = loadImage ('https://throughmyeyez.github.io/74portfolio/game/catch_html/youwin.jpg'); //background L2
  img4 = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/jungle.jpg'); 
  img5 = loadImage ('https://throughmyeyez.github.io/74portfolio/game/catch_html/letsgo.jpg');
  img7 = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/damien.png');
  img8 = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/bglove1.png'); //background L3
  img9 = loadImage('https://throughmyeyez.github.io/74portfolio/game/catch_html/Baseball_(crop).png');
}

function setup() {
  createCanvas(600, 600);
  let c =color(50, 50, 50); //text color
  fill(c);
  textAlign(CENTER);
  textSize(50); 
} // end of setup


function draw() {
  
if(gameState =="begin"){
  background(img5);
  beginGame();
}
  
if(gameState =="L1"){
  background(beginImg);
  levelOne();
}
if(gameState =="L2"){
    background(img4);
  levelTwo();
}
if(gameState =="L3"){
    background(img8);
  levelThree();
}
if(gameState =="Win"){
    background(img3);
  win();
}
  text(("Score: " + score), width/2, 41);
} // end of draw

function beginGame(){
  text("Click to start game!", width/2, height-10);
 if (mouseIsPressed === true) {
  gameState="L1";  
 } // end of if mousIsPressed
} // end of beginGame


function levelOne(){
  text("level 1", width/2, height-10);
  var distToBall = dist(ballx+10, bally+10, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-10);
    bally = random(height-10);
    score = score +1;
    ballSize=ballSize -8;
  } // end if
  if (score>=20){
    gameState= "L2";
  }
  line(ballx+20, bally+20, mouseX, mouseY);
  image(img7, ballx, bally, ballSize, ballSize);
} // end of level 1


function levelTwo(){
  text("level 2", width/2, height-10);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -3;
  } // end if
  if (score>=40){
       gameState= "L3";
  }
  //line(ballx+20, bally+20, mouseX, mouseY);
   image(img2, ballx, bally, ballSize, ballSize);
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-10);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize - 1;
  } // end if
  if (score>=60){
       gameState= "Win";
  }
      //line(ballx+20, bally+20, mouseX, mouseY);
      image(img9, ballx, bally, ballSize, ballSize);
} // end level 3

function win(){
  text("Game Over", width/2, height-20);
} // end win
