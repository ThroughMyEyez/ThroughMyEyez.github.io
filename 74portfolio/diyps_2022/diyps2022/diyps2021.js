var img;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/acme_clock.png');
  img2 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/blue_clock.png');
  img3 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/gold_clock.png');
  img4 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/green_clock.png');
  img5 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/green_shoes_clock.png');
  img6 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/omg_clock.png');
  img7 = loadImage('https://ThroughMyEyez.github.io/diyps_2022/diyps2022/running_clock.png');
}

function setup() {
createCanvas(800, 800);  // canvas size
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

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // rotate 180 line to origin
    let originX = width / 2;
    let originY = height / 2;
    line(mouseX, mouseY, originX, originY);
    line(width - mouseX, height - mouseY, originX, originY);


  } else if (toolChoice == 'b' || toolChoice == 'B') { // g places the image we pre-loaded
    image(img, mouseX-30, mouseY-30);
    
  } else if (toolChoice == 'd' || toolChoice == 'D') { // g places the image we pre-loaded
    image(img2, mouseX-60, mouseY-60);
    
  } else if (toolChoice == 'a' || toolChoice == 'A') { // g places the image we pre-loaded
    image(img3, mouseX-60, mouseY-60);
    
  } else if (toolChoice == 'm' || toolChoice == 'M') { // g places the image we pre-loaded
    image(img4, mouseX-60, mouseY-60);
    
  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    image(img5, mouseX-60, mouseY-60);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') { // g places the image we pre-loaded
    image(img6, mouseX-60, mouseY-60);
    
  } else if (toolChoice == 'n' || toolChoice == 'N') { // g places the image we pre-loaded
    image(img7, mouseX-60, mouseY-60);
    
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
