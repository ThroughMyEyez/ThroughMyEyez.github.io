var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/acme_clock.png');
  img2 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/blue_clock.png');
  img3 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/gold_clock.png');
  img4 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/green_clock.png');
  img5 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/green_shoes_clock.png');
  img6 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/omg_clock.png');
  img7 = loadImage('ThroughMyEyez.github.io/diyps_2022/diyps2022/running_clock.png');
}

function setup() {
createCanvas(800, 800);  // canvas size
centerCanvas(cnv);
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

//Thin Line
 if (toolChoice == '0' ) {  // first tool
   
    stroke(01);
    strokeWeight(1);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '5') { // rotate 180 line to origin
    let originX = width / 2;
    let originY = height / 2;
    line(mouseX, mouseY, originX, originY);
    line(width - mouseX, height - mouseY, originX, originY);

  }  else if (toolChoice == '1') { //inserts acme clock
    image(img1, mouseX, mouseY);

  } else if (toolChoice == '2') { //inserts blue clock
    image(img2, mouseX, mouseY);
    
  } else if (toolChoice == '3') { //inserts gold clock
    image(img3, mouseX, mouseY);

  }  else if (toolChoice == '4') { //inserts green clock
    image(img4, mouseX, mouseY);

  } else if (toolChoice == '5') { //inserts green shoes clock
    image(img5, mouseX, mouseY);
    
  } else if (toolChoice == '6') { //inserts omg clock
    image(img6, mouseX, mouseY);

  } else if (toolChoice == '7') { //inserts running clock
    image(img7, mouseX, mouseY);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
