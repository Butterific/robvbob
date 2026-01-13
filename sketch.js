let score = 0;
let counter = 0;
let bgm;
let musicstate = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rob = new Sprite(robimg, 0, 0, 0.1, 0.1);
  bob = new Sprite(bobimg, 0, 0, 0.1, 0.1);
  textFont('Comic Sans MS')
  userStartAudio();
  bgm.loop();
}
function preload() {
  robimg = loadImage("robplush.png");
  bobimg = loadImage("bobplush.png");
  bgm = loadSound('cero.mp3')
}

function draw() {
  background("green");
  frameRate(60);
  counter++;
  updatesprite(mouseX,mouseY);
  scoreupd(`Score: ${score}`); 
  checktouching();
  bob.layer = 0; 
  text("make sure that rob is overlaping exactly over bob inorder to count for score", 100, 700)
  if (musicstate == 0)
  {
    bgm.play();
    musicstate = 1;
  }
}
function updatesprite(x, y) {
  rob.x = x;
  rob.y = y;
}
function scoreupd(score) {
  text(score, 10, 30);
  stroke(10);
  fill("white");
  textSize(24);
}
function changebobpos() {
  bob.x = random(width);
  bob.y = random(height);
}
function checktouching() {
  if (rob.overlap(bob))
  {
    score += 1;
    changebobpos()
    scoreupd(`Score: ${score}`);  
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

