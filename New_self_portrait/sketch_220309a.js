function setup() {
createCanvas(600 , 600);
}
function draw() {
background(100);
  
fill(115, 140, 100); // Skin Color brown
quad(250, 55, 800, 80, 140, 250, 5, 200);
  
fill(115, 140, 100); // Skin Color brown
quad(550, 250, 1600, 80, 180, 100, 5, 55);

fill(115, 140, 100); // Skin Color brown
quad(350, 150, 500, 80, 250, 500, 5, 55);

fill(115, 140, 100); // Skin Color brown
quad(550, 500, 55, 250, 180, 100, 5, 55);
  
fill(115, 140, 100); // Skin Color brown
quad(550, 500, 55, 500, 150, 100, 50, 250);
  
fill(115, 140, 100); // Skin Color brown
quad(550, 150, 55, 500, 350, 100, 50, 800);
  
fill(115, 140, 100); // Skin Color brown
quad(550, 150, 55, 500, 350, 100, 50, 800);



fill(180, 140, 100); // Skin Color brown
ellipse(250, 300, 300, 400); // Head

fill(500, 500, 500); // Eye Color white
ellipse( 200, 260, 65, 80); // Left Eye
ellipse( 300, 260, 65, 80); // Right Eye
strokeWeight(3)

fill(191, 148, 119); // Eye Color brown
ellipse( 200, 260, 40, 50); // Left Eye
ellipse( 300, 260, 40, 50); // Right Eye

fill(0, 0, 0); // inner left eye Color pupil Black
ellipse( 200, 260, 25, 25); // Left Eye inner


fill(0, 0, 0); // inner right eye Color pupil Black
ellipse( 300, 260, 25, 25); // Right Eye inner

fill(20, 15, 50); // Hair Color
rect(159, 195, 75, 15, radians(900), radians(900)); // Left Eyebrow
rect(259, 195, 75, 15, radians(900), radians(900)); // Right Eyebrow

fill(180, 140, 100);
arc(235, 355, 50, 55, radians(180), radians(270)); // outter nose right curve
arc(265, 355, 50, 55, radians(270), radians(0)); // outter nose left curve


line(235, 325, 250, 240); // upper nose left
line(265, 325, 250, 240); // upper nose right
fill(0, 0, 0,); // Nose color black
ellipse( 230, 350, 25 , 25); // Left nose
ellipse( 267, 350, 25 , 25); // Right nose

rect(200, 400, 100, 50, radians(900), radians(1050)); // mouth

fill(20, 15, 50); // Hat Lip color
rect(25, 145, 105, 39, radians(5000), radians(5000)); // hat lip

fill(255, 0, 0,); // hat color red
arc(250, 185, 300, 280, radians(180), radians(0)); // hat
line(400, 185, 100, 185); // bottom of hat

arc(235, 185, 135, 278, radians(180), radians(270)); // outter nose right curve on hat
arc(255, 185, 135, 278, radians(270), radians(0)); // outter nose left curve on hat

fill(0, 0, 0); // Black button on hat color
ellipse(245, 52, 35, 25); // Black button on hat

fill(180, 140, 100); // Skin Color brown cheek
arc(175, 285, 95, 120, radians(90), radians(180)); // left cheek

fill(180, 140, 100); // Skin Color brown cheek
arc(326, 285, 95, 120, radians(0), radians(90)); // right cheek

arc(250, 470, 110, 110, radians(0), radians(180)); // chin

fill(500, 500, 500); // teeth Color
rect(197, 399,23, 26, radians(500), radians(500)); // teeth 1
rect(217, 399,23, 26, radians(500), radians(500)); // teeth 2
rect(236, 399,23, 26, radians(500), radians(500)); // teeth 3
rect(257, 399,23, 26, radians(500), radians(500)); // teeth 4
rect(278, 399,23, 26, radians(500), radians(500)); // teeth 5

rect(197, 426,23, 26, radians(500), radians(500)); // teeth 1
rect(217, 426,23, 26, radians(500), radians(500)); // teeth 2
rect(236, 426,23, 26, radians(500), radians(500)); // teeth 3
rect(257, 426,23, 26, radians(500), radians(500)); // teeth 4
rect(278, 426,23, 26, radians(500), radians(500)); // teeth 5
  
fill(180, 140, 100); // ear color
arc(110, 275, 70, 70, radians(90), radians(220)); // lower left ear
arc(110, 275, 70, 70, radians(200), radians(270)); // upper left ear

fill(0, 0, 0,); // ear color black
arc(110, 275, 40, 40, radians(90), radians(270)); // left inside ear
  
fill(180, 140, 100); // ear color
arc(390, 275, 70, 70, radians(320), radians(90)); // lower right ear
arc(390, 275, 70, 70, radians(270), radians(340)); // upper right ear

fill(0, 0, 0,); // ear color black
arc(390, 275, 40, 40, radians(270), radians(90)); // right inside ear
  


}
