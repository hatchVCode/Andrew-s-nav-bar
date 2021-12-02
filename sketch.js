function setup() {
  x = 800; 
  var canvas = createCanvas(x, 800);
  canvas.parent('sketch-holder');
  background(255, 0, 200);
}

function draw() {
  frameRate(180);
  noStroke(); 
  background(220, 230, 210);
  fill(186, 128, 274);
  ellipse(mouseX, mouseY, 80, 80);
  ellipse(mouseY, mouseX, 80, 80);
  fill(86, 28, 74);
  text("Hold a Ball Version 2", 20, 40); 
}

