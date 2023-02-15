function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("gray");
  noStroke();
  
  changingNumbers(1);
  changingNumbers(2);
}

function changingNumbers(scaleKnob) {
if (mouseX < 100) {
    fill("maroon");
    rect(190, 80, 40, 240);
    rect(150, 120, 40)
  } else if (mouseX >= 100 && mouseX < 200) {
    fill("red");
    rect(80, 280, 240, 40);
    rect(80, 240, 40);
    rect(80, 200, 240, 40);
    rect(280, 120, 40, 80);
    rect(80, 80, 240, 40);
  } else {
    fill("orange");
    rect(80, 280, 240, 40);
    rect(280, 240, 40);
    rect(120, 200, 200, 40);
    rect(280, 120, 40, 80);
    rect(80, 80, 240, 40);
    
    scale(scaleKnob);
  }
}
