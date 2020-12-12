const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

var score=0;
var count=0;

var gameState="start";

function setup() {
  createCanvas(800,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  for (var k = 0; k <=width; k = k + 80) {
    var d= new Division(k, height-divisionHeight/2, 10, divisionHeight)
    divisions.push(d);
  }

  for(var j=40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var j=40; j<=width-20; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width-10; j=j+50) 
    {
      var p4= new Plinko(j,375)
       plinkos.push(p4);
    }

  
   
  


  ground = new Ground(width/2,height,width,20);
}

function draw() {

  background(0);  
  textSize(35);
  text("score: "+score,20,40);
  fill(255);
  text(" 500 ",5,550);
  text(" 500 ",80,550);
  text(" 500 ",160,550);
  text(" 500 ",240,550);
  text(" 100 ",320,550);
  text(" 100 ",400,550);
  text(" 100 ",480,550);
  text(" 200 ",560,550);
  text(" 200 ",640,550);
  text(" 200 ",720,550);
Engine.update(engine);

  ground.display();

  if(gameState==="End"){
    textSize(100);
    text("game over",150,250);

  }

  for(var j=0; j<plinkos.length;j++){
    plinkos[j].display();
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  if(frameCount%60===0){
var p= new Particle(random(width/2-30,width/2+30),10,10);
particles.push(p);


  }
  for(var i=0;i<particles.length;i++){

    particles[i].display();

  }


  
  drawSprites();
}