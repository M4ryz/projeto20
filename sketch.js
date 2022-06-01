
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var block1;
var block2;
var block3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var ground_options={
		isStatic: true
	}

	var block1_options= {
		restitution :0.5,
		friction : 0.02,
		frictionAir :0
	}
	
	var block2_options = {
		restitution : 0.7,
		friction: 0.01,
		frictionAir: 0.1
		
		}

	
	var block3_options= {
		restitution : 0.1,
		friction: 0.01,
		frictionAir: 0.3
		}
	
	block1 = Bodies.circle(220,10,10,block1_options);
	World.add(world,block1);

	block2= Bodies.rectangle(110,50,10,10, block2_options);
	World.add(world,block2);

	block3= Bodies.rectangle(350,50,10,10, block3_options);
	World.add(world,block3);

	ground= Bodies.rectangle(200,690,400,20,ground_options);
	World.add(world,ground);

	Engine.run(engine);

	}

function draw() {
	rectMode(CENTER);
	background("green");

	Engine.update(engine);
	
		ellipse(block1.position.x,block1.position.y,70);
		rect(block2.position.x, block2.position.y, 70);
		rect(block3.position.x, block3.position.y,70)
	
	drawSprites();

	

}



