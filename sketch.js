const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var umbrella;
var drops=[];
var maxDrops=100;
var thunderFrame=0;
function preload(){
    thunder1=loadImage("1.png");
    thunder2=loadImage("2.png");
    thunder3=loadImage("3.png");
    thunder4=loadImage("4.png");
}

function setup(){
   createCanvas(400,700);
   engine=Engine.create();
   world=engine.world;
    umbrella = new Umbrella(200,500);
    if(frameCount%150==0){
        for(var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
    }
thunderg=new Group();
}

function draw(){
    Engine.update(engine);
    background("black");
    umbrella.display();
     var r = Math.round(random(1,4));
     if(frameCount%80==0){
    thunderFrame=frameCount
    thunder=createSprite(random(10,370),random(10,30),10,10);
    if(r==1){
        thunder.addImage(thunder1);
    }
    if(r==2){
        thunder.addImage(thunder2);
    }
    if(r==3){
        thunder.addImage(thunder3);
    }
    if(r==4){
        thunder.addImage(thunder4);
    }
    thunder.scale=random(0.3,0.6);
    thunderg.add(thunder);
     }
  if(thunderFrame+10===frameCount&&thunderg){
      
        thunderg.destroyEach();
  }
    for(var i=0;i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }
    drawSprites();
}   

