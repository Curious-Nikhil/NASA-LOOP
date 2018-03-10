var cx;
var cy;
var x;
var y;
var r = 170;
var o = 0;
var sunsize = 200;
var stars = [];

function setup() {
    canvas = createCanvas(600, 600);
    frameRate(30)
    cx = width/2;
    cy = height/2;

    for (var i = 0; i < 800; i++) {
      stars[i] = new Star();
    }

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
    stroke(126);
    //left
    line(cx - (sunsize/2), 0, cx - (sunsize/2), cy*2)
    //right
    line(cx+(sunsize/2), 0, cx + (sunsize/2), cy*2)

    if ((sunsize/2) > x && x > (-sunsize/2)) {
      fill(255, 0, 0);
      textSize(16);
      text("I Am UNDER SUN!!, Its hot!", cx-100, 50)
  }

    for ( var i = 0; i < stars.length; i++) {
      stars[i].show();
    }
  }


  function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.show = function() {
      fill(random(100,255));
      noStroke();
      ellipse(this.x, this.y, 2, 2);
    }
  }
