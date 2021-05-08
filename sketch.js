const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var backgroundImg;

var snow = []

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  boyImg = loadAnimation("b1.png","b2.png","b3.png","b4.png")
}





function setup() {
  createCanvas(800,400);
  engine = Engine.create();

  world = engine.world;

  boy = createSprite(50,320,10,10);
  boy.addAnimation("boy",boyImg);
  boy.velocityX = 1;
  boy.scale = 0.5;

  ground = Bodies.rectangle(400,400,800,20,{isStatic : true});
  World.add(world,ground);


 
}

function draw() {
  background(backgroundImg);  
 

  Engine.update(engine);

  if(frameCount%30 === 0){
    snow.push(new Snow (random(50,600),5))
  }
  

  for(var i = 0; i < snow.length; i++){
    snow[i].display();
  }
  drawSprites()
}