// Tutorials: Learning to draw with the 2D Primitives and some random.
// https://www.youtube.com/watch?v=c3TeLi6Ns1E
// https://happycoding.io/tutorials/p5js/random

function setup() {
	createCanvas(400, 400);
	frameRate(3);
	strokeWeight(2);
	stroke(175, 175, 175);
	
	 var circleSize = 175;
    ellipse(width/2, height/2, circleSize)
  
}

function draw() {
	background(50, 50, 50);


	rectMode(CENTER);
	
	rect(200, 150, 150, 150, 40);
	
	line(125, 175, 30, 215);
	line(125, 170, 30, 195);
	line(125, 165, 30, 175);
	
	line(275, 175, 365, 215);
	line(275, 170, 365, 195);
	line(275, 165, 365, 175);
	
	triangle(150, 75, 175, 25, 200, 75);
	triangle(250, 75, 275, 25, 225, 75);
	
	ellipse(220, 330, 240, 400);

	
    var petalSize = random(20, 125);
    var flowerCenterX = random(width);
    var flowerCenterY = random(height);
    var r = random(255);
    var g = random(255);
    var b = random(255);
	
	
  
  ellipse(flowerCenterX - petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX - petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  
  
  fill(r/2, g/2, b/2);
  ellipse(flowerCenterX, flowerCenterY, petalSize, petalSize);
		
}

