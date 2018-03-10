var cx;
var cy;
var x;
var y;
var r = 100;
var o = 0;
var sunsize = 30;

function setup() {
    canvas = createCanvas(600, 600);
    frameRate(30)
    cx = width/2;
    cy = height/2;

  }

function draw() {
    background(0);
    fill("yellow");
    ellipse(cx, cy, sunsize);

    fill(255)
    x = r*cos(o);
    y = r*sin(o);
    o = o + 0.01;
    ellipse(cx - x, cy - y, 10, 10);
    print(y)
    text(x, 100, 100)
    if ((sunsize) > x && x > (-sunsize)) {
      fill(255, 0, 0);
      print("HIT!")
      ellipse(10, 10, 30, 30);
    }

  }
