
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boyImage;
var stone;
var tree;
var ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;
function preload()
{

	boyImage = loadImage("Plucking mangoes/boy.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	boy = createSprite(650,400,20,20);
	boy.addImage(boyImage);

	stone = new Stone(680,400);

	ground = new Ground(0,600,800,20);
	tree = new Tree(700,550);
	mango1 = new Mango(700,550,20);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  drawSprites();
 
}



