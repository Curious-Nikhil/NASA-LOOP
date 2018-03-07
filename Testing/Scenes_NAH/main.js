function setup() {
  createCanvas(300, 300);
  smgr = new SceneManager();

  smgr.addScene(Animation1);
  smgr.addScene(Animation2);

  smgr.showNextScene();
}

function draw() {
  smgr.draw();
}

function mousePressed()
{
  smgr.mousePressed();
}

function Animation1 ()
{
  var x;
  var y;
  var angle;
  var r;
  this.enter = function()
  {
    x = r*cos(angle);
    y = r*sin(angle);

    print("Hi I am hit.")
    // background(255)
    // fill(0);
    // ellipse(x, y, 10, 10);
  }

  this.mousePressed = function()
  {
    this.sceneManager.showNextScene();
  }
}

function Animation2 ()
{
  var x;
  var y;
  var angle;
  var r;
  this.enter = function()
  {
    x = r*cos(angle);
    y = r*sin(angle);
    background(255)
    fill(0);
    ellipse(x, y, 10, 10);
    print("Hi I am hit.123")

  }

  this.mousePressed = function()
  {
    this.sceneManager.showNextScene();
  }
}
