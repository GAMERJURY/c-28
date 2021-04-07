
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(650,200,30);
	mango2=new Mango(830,70,35);
	mango3=new Mango(750,100,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,36);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,33);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	pathar = new Stone(200,200);
	pakad = new Throw(pathar.body,{x :90,y:440})
	
	treeObj=new tree(800,600);
	groundObject=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
background(230);
image(boy ,50,370,200,300);
 
detectCollision(pathar,mango1);
detectCollision(pathar,mango2);
detectCollision(pathar,mango3);
detectCollision(pathar,mango4);
detectCollision(pathar,mango5);
detectCollision(pathar,mango6);
detectCollision(pathar,mango7);
detectCollision(pathar,mango8);
detectCollision(pathar,mango9);
detectCollision(pathar,mango10);

 
treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();        
  mango10.display();
                            
 pathar.display();
 groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(pathar.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	pakad.fly();
}
function detectCollision(lpathar,lMango){
	

	if(pathar.body.position.x- lMango.body.position.x <lMango.diametre + pathar.diametre
		&& lMango.body.position.x - lpathar.body.position.x  < lMango.diametre + pathar.diametre
		&&pathar.body.position.y -lMango.body.position.y < lMango.diametre + pathar.diametre
		&& mango.body.position.y - pathar.body.position.y < mango.diametre + pathar.diametre){
		Matter.Body.setStatic(mango.body,false);
	}

}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(pathar.body,{x:100,y:465});
		pakad.Launch(pathar.body);
	}
}
