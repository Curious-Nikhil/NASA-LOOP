function setup() {
  createCanvas(300, 300);
  background(0);

}

function draw() {
  if (mouseIsPressed) {
    fill(255);
    stroke(255)
    ellipse(mouseX, mouseY, 64);
    }

  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 32);
}
