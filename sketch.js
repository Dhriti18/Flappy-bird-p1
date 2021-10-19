var stage,bird,birdin,pillar;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
var engine,world;
var score;
var gameState=1;
//var pillarGroup=new Group();

function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  stage=new Bgm(100,100,2000,700);
  bird=new Bird(100,100,200,100);
  birdin=new BBird(bird.x,bird.y,200,100);
  //bird.x=birdin.position.x
  //bird.y=birdin.position.y;
  pillar1=new Pillar(1000,320,100,220);
  pillar2=new Pillar(900,320,100,160);
  pillar3=new Pillar(800,320,80,200);
  pillar4=new Pillar(700,340,100,150);
  pillar5=new Pillar(600,320,80,190);
  pillar6=new Pillar(500,320,100,250);
  pillar7=new Pillar(400,320,80,200);
  pillar8=new Pillar(300,320,80,150);
  pillar9=new RPillar(1000,20,100,310);
  pillar10=new RPillar(900,20,100,330);
  pillar11=new RPillar(800,20,80,360);
  pillar12=new RPillar(700,20,100,310);
  pillar13=new RPillar(600,20,80,360);
  pillar14=new RPillar(500,20,100,250);
  pillar15=new RPillar(400,20,80,310);
  pillar16=new RPillar(300,20,80,190);
  
  
  //sprite bird

}

function draw() {
  Engine.update(engine);
if(gameState===1){
 background("pink");  
 
  fill("White")
  stroke("blue")
  strokeWeight(4)
  textSize(30);
text("PRESS 'S' TO START",400,300)
fill("blue")
stroke("red")
strokeWeight(1)
textSize(20);
text 
("A bird named Weimer was given a challenge to cross this way  to save her kingdom,make the bird reach the end!",
10,100)
bird.visible=false;
}



  if(gameState===2){
    stage.display();bird.display();
  birdin.display();
  pillar1.display();
  pillar2.display();
  pillar3.display();
  pillar4.display();
  pillar5.display();
  pillar6.display();
  pillar7.display();
  pillar8.display();
  pillar9.display();
  pillar10.display();
  pillar11.display();
  pillar12.display();
  pillar13.display();
  pillar14.display();
  pillar15.display();
  pillar16.display();
 
  }
  
  


}
function keyTyped() {
  if (key === 's') {
    gameState=2;
  } }

  function keyCode() {
    if (keyCode === SPACE) {
    
    // Matter.body.setPosition(bird.body,70,100,20,20);
    Matter.Body.setStatic(birdin.body,false)
    } }
