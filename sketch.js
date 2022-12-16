var alien;
var backgroundImage;
var rocket;
var blast;
var asteriods;
var Minnie;
var Golden;
var Pink;
var Purple;
var Red

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  alien = loadImage("./assets/Alien.png");
  rocket = loadImage("./assets/rocket.png");
  blast = loadImage("./assets/blast.png");
  asteriods = loadImage("./assets/asteriods.png");
  Minnie = loadImage("./assets/minnie_mouse.png");
  Golden = loadImage("./assets/golden_bow.png");
  Pink = loadImage("./assets/pink_bow.png");
  Purple = loadImage("./assets/purple_bow.png");
  Red = loadImage("./assets/red_bow.png");
}

function setup() {
  canvas = createCanvas(400, 800);

  Minnie = createSprite(-200, 400, 50, 50);
  Minnie.addImage("minnie_mouse.png");
  Minnie.scale = 0.5;

  Golden = createSprite(Math.round(random(1,100)));
  Golden.addImage("golden_bow.png");
  Golden.scale = 0.9;

  Pink = createSprite(Math.round(random(1,100)));
  Pink.addImage("pink_bow.png");
  Pink.scale = 0.7;

  Purple = createSprite(Math.round(random(1,100)));
  Purple.addImage("purple_bow.png");
  Purple.scale = 0.7;

  Red = createSprite(Math.round(random(1,100)));
  Red.addImage("red_bow.png");
  Red.scale = 0.7;

  rocket = createSprite(200, 400, 50, 50);
  rocket.addImage("rocket.png");
  rocket.scale = 0.5;

  alien = createSprite(400, 200, 50, 50);
  alien.addImage("Alien.png");
  alien.scale = 0.5;

  asteriods = createSprite(500, 200, 50, 50);
  asteriods.addImage("asteriods.png");
  asteriods.scale = 0.5;
}

function draw() {
  background("backgroundImage")
  drawSprites();
}
