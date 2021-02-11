const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render
const Constraint = Matter.Constraint;
var engine, world;
var sling1  ,stone1
var g1 , g2 , g3  ,g4 , g5 ,g6;
var c1, c2 ,c3 ,c4

function preload (){

}
function setup() {
   canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  g1 = new Ground(510,300,250,10);
  g2 = new Ground(700,200,200,10);
  g3 = new Ground(800,150,100,10);
  g4 = new Ground(200,500,150,10); 

	stone1=new Stone(1000, 300,40,40);
  sling1 = new Sling(stone1.body,{x:1000,y:400});
	
c1 = new Stone (200,400,50,50)
c2 =new Stone(200,300,50,50)
c3 = new Stone(510,200,50,50)
c4 = new Stone (800,70,50,50)
c5 = new Stone (690,180,50,50)
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1600,
    height: 700,
    wireframes: false
  }
  });
Render.run(render); 
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  

g1.display();
  g2.display()
  g3.display();
  g4.display();


stone1.display();
sling1.display();
c1.display();
  c2.display();
c3.display();
c4.display();
c5.display();


textSize(20);
  fill("black");
  text("Drag the Stone and Release it, to launch it towards the pebbles",100,30);
    drawSprites();
}
function mouseDragged(){
	
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	sling1.fly();

}
