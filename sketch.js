
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var gameState = "onSling";


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	//Create the ground here.
	ground = Bodies.rectangle(400, 680, 800, 10 , {isStatic:true} );

	 World.add(world, ground);
	
	//Create the Bodies Here.

	paper1=new Paper(100,200,60)

box1=new Box(330,235,30,40)
box2=new Box(360,235,30,40)
box3=new Box(390,235,30,40)
box4=new Box(420,235,30,40)
box5= new Box(450,235,30,40)
//level three
box6=new Box(360,195,30,40)
box7=new Box(390,195,30,40)
box8=new Box(420,195,30,40)
//top
box9=new Box(390,155,30,40)

//second lair
box10=new Box(530,235,30,40)
box11=new Box(560,235,30,40)
box12=new Box(590,235,30,40)
box13=new Box(620,235,30,40)
box14= new Box(650,235,30,40)
//level three
box15=new Box(560,195,30,40)
box16=new Box(590,195,30,40)
box17=new Box(620,195,30,40)
//top
box18=new Box(590,155,30,40)
rope=new Slingshot({x:100,y:100},paper1.body)
ground1 = new Ground(400,350,175,10)
ground2 = new Ground(600,300,175,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  paper1.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 rope.display()
 ground1.display()
 ground2.display()
rect(ground.position.x,ground.position.y,800,10)

}

function mouseDragged(){
      
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
	 

}
function mouseReleased(){
    rope.fly();
    gameState = "launched";
}




