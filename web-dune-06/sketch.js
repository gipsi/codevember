function setup(){
  createCanvas(500, 500);
  background(28, 2, 49);
  stroke(220, 182, 252);
}

function draw(){
  if (mouseIsPressed){	
  line(30, 30, 800, 800); // line(x1, y1, x2, y2)
  line(350, 30, 200, 800);
  line(550, 30, 30, 450);
  } 
   if (mouseIsPressed) {
    fill(255, 170, 0);
  } else {
    fill(28, 2, 49);
  }
  ellipse(mouseX, mouseY, 4, 4);
 
}





