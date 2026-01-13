let mode = 0;
song = new Audio();
song.src = "https://robvbob.butterlabs.app/cero.mp3"; 
song.loop = true;
song.play();
song.volume = 0.5;
let score = 0;
let counter = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rob = new Sprite(robimg, 0, 0, 0.1, 0.1);
  bob = new Sprite(bobimg, 0, 0, 0.1, 0.1);
  textFont('Comic Sans MS')
}
function preload() {
  robimg = loadImage("robplush.png");
  bobimg = loadImage("bobplush.png");
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

