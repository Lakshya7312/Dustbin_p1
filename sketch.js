const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var waste;
var dust1, dust2, dust3;

function setup() {
  createCanvas(800,370);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 359, 796, 15);

  waste = new Paper(150, 10);

  dust1 = new Dustbin(596, 294, 12, 110);
  dust2 = new Dustbin(642, 343, 100, 12);
  dust3 = new Dustbin(686, 293, 12, 110);
  
}

function draw() {
  background(36, 37, 32); 
  
  Engine.update(engine);

  ground.display();

  waste.display();

  dust1.display();
  dust2.display();
  dust3.display();

  fill("white");
  noStroke();
  textSize(13);
  text("Press the up arrow key to bounce the ball", 300, 40);

  if(keyDown(UP_ARROW)){
    text.Visibility = false;
  }
  createEdgeSprites();
  //waste.bounceOff(rightEdge);
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(waste.body, waste.body.position, {x:60, y:-60});
  }
};