const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
 
var bgImg, bg;
var ground;
var stone, slingShot;
var tree, boyImg;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7;

function preload() {
    bgImg = loadImage("sprites/bg.png");
    boyImg=loadImage("sprites/boy.png");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    tree = new Tree(750,550);
    stone = new Stone(80,200,40,40);
    slingshot = new SlingShot(stone.body,{x:100, y:345});


    mango1=new Mango(650,250,25);
    mango2=new Mango(750,270,25);
    mango3=new Mango(830,220,25);
    mango4=new Mango(710,170,25);
    mango5=new Mango(820,355,25);
    mango6=new Mango(800,150,25);
    mango7=new Mango(687,335,25);
}

function draw(){
    image(bgImg, 500, 250, 1000, 500);
    //background(bgImg);
    Engine.update(engine);
    strokeWeight(4);


    imageMode(CENTER);
    image(boyImg, 150, 400, 150, 220);
    
    tree.display(); 
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    stone.display();
    ground.display();
    slingshot.display();


    detectCollision(stone,mango1);
    detectCollision(stone,mango2);
    detectCollision(stone,mango3);
    detectCollision(stone,mango4);
    detectCollision(stone,mango5);
    detectCollision(stone,mango6);
    detectCollision(stone,mango7);


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32 ){
        Matter.Body.setPosition(stone.body, {x: 80, y:200});
        slingshot.attach(stone.body);
   }
 }

function detectCollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position;
    stoneBodyPosition=lstone.body.position;
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.radius+lstone.width/2){
  	  Matter.Body.setStatic(lmango.body,false);
    }

}