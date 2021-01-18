
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImg

function preload()
{
boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 mango1 = new mango(600,400);
 mango2 = new mango(570,380);
 mango3 = new mango(670,340);
 mango4 = new mango(600,300);
 mango5 = new mango(520,350);

 stone1 = new stone(150,540);

 tree1 = new tree(600,425);
 tree1.debug = true;

 ground1 = new ground(400,650,800,40);
 
 launcher1 = new launcher(stone1.body,{x:150, y:540});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  imageMode(CENTER);
  image(boyImg,200,600,120,185);
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  ground1.display();
  launcher1.display();
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:150,y:540})
    launcher1.attach(stone1.body);
  }
}

function detectCollision(lstone, mangoObj){
  mangoBodyPosition = mangoObj.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= mangoObj.r + lstone.r){
    Matter.Body.setStatic(mangoObj.body,false);
  }
}



