//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//to create the sprite objects
var engine, world;
var holder;
var ball;
var ground;
var stand1, stand2;
var slingShot;
var polygon_img;
var score = 0;
var backgroundImg;
var gameState = "onsling";
var bg = "bg1.png";

//to preload the image
function preload(){

  getBackgroundImg();

  backgroundImg = loadImage("bg1.png");

  polygon_img = loadImage("polygon.png");

}

function setup() {

  //to create the canvas
  createCanvas(900,400);

  //to create engine and world
  engine = Engine.create();
  world = engine.world;

  //to run the engine
  Engine.run(engine);

  //to create the ground
  ground = new Ground();

  //to create the stands
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //set 1 for first stand
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);

  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);

  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);

  //top
  blocks9 = new Block(700,95,30,40);

  //to create the ball holder with slings
  ball = Bodies.circle(50,200,20/2);
  World.add(world,ball);

  //to create slingshot
  slingShot = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {

  //to give the background
  if(backgroundImg){

    background(backgroundImg);

  }
 
  //to update the engine
  Engine.update(engine);

  //to display the text
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks.",10,30);
  text("Press 'space' to reset the polygon's position.", 10, 70);
  text("SCORE : " + score, 750, 30);

  //to display the game objects
  ground.display();

  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.score();
  block1.display();
  block2.score();
  block2.display();
  block3.score();
  block3.display();
  block4.score();
  block4.display();
  block5.score();
  block5.display();
  block6.score();
  block6.display();
  block7.score();
  block7.display();
  fill("pink");
  block8.score();
  block8.display();
  block9.score();
  block9.display();
  block10.score();
  block10.display();
  block11.score();
  block11.display();
  block12.score();
  block12.display();
  fill("turquoise");
  block13.score();
  block13.display();
  block14.score();
  block14.display();
  block15.score();
  block15.display();
  fill("grey");
  block16.score();
  block16.display();
  fill("skyblue");
  blocks1.score();
  blocks1.display();
  blocks2.score();
  blocks2.display();
  blocks3.score();
  blocks3.display();
  blocks4.score();
  blocks4.display();
  blocks5.score();
  blocks5.display();
  fill("turquoise");
  blocks6.score();
  blocks6.display();
  blocks7.score();
  blocks7.display();
  blocks8.score();
  blocks8.display();
  fill("pink");
  blocks9.score();
  blocks9.display();

  fill("gold");
  imageMode(CENTER);
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();

}

function mouseDragged(){

  if(gameState !== "launched"){

    Matter.Body.setPosition(this.ball, {x : mouseX, y : mouseY});

  }

}
function mouseReleased(){

  slingShot.fly();
  gameState = "launched";

}

function keyPressed(){

  if(keyCode === 32 && this.ball.speed < 1){

      slingShot.attach(this.ball);
      Matter.Body.setPosition(this.ball, {x:100, y:200});
      gameState = "onSling";
  
  }

} 

async function getBackgroundImg() {

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);

  if(hour>=06 && hour<=19){

      bg = "Sprites/bg.jpg"

  } else {

      bg = "Sprites/bg1.jpg"

  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);

}