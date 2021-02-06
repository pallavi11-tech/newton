
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500,1000);

	engine = Engine.create();
	world = engine.world;
	roof = new Roof(width/2,200,1300,100);
	//rope1 = new Rope(bob1,roof,200,90);
	//rope2 = new Rope(bob2,roof,300,180);
	//rope3 = new Rope(bob3,roof,400,270);
	//  new Rope(bob4,roof,500,360);
	//rope5 = new Rope(rope5,roof,600,450);
	//bob1 = new Bob(150,800);
	//bob2 = new Bob(300,800);
	//bob3 = new Bob(450,800);
	//bob4 = new Bob(600,800);
	//bob5 = new Bob(750,800);


	//engine = Engine.create(x,y,width,heigth);
	//world = engine.world;

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
 // rope1.display();
  //rope2.display();
  //rope3.display();
  //rope4.display();
 // rope5.display();
 // bob1.display();
 // bob2.display();
 // bob3.display();
  //bob4.display();
  //bob5.display();
  
  drawSprites();
 
}



