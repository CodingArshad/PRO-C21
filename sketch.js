
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var leftB;
var rightB;
var ball;

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;
	
	

	//Create the Bodies Here.
	ground =new Ground(200,390,400,20);
  	rightB = new Ground(390,200,20,400);
  	leftB = new Ground(10,200,20,400);

	var ball_options={
		isStatic : false,
		restitution : 0.2,
		friction : 0,
		density : 1.2
	}

	ball = Bodies.circle(200,100,20,ball_options);
  	World.add(world,ball);

	rectMode(CENTER);  
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show();
  leftB.show();
  rightB.show();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}



