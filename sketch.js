var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var invisibleGround;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
   
  monkey = createSprite(92,395,10,10);
  monkey.addAnimation("monkeyImg", monkey_running)
  monkey.scale=0.2
  
  ground= createSprite(400,395,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log=ground.x;
  
  invisibleGround=  createSprite(400,395,900,10)
  invisibleGround.velocityX=-4;
  invisibleGround.x=ground.width/2;
 
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
 background("#98FB98");
  
     if (ground.x < 400){
      ground.x = ground.width/2;
    }
  
  
     if (invisibleGround.x < 400){
      invisibleGround.x = invisibleGround.width/2;
    }
    
  invisibleGround.visible=false;
  
  fruit();
  obstacles();
   stroke("black")
  textSize(20);
  fill("black");
  survivalTime=survivalTime + Math.round(getFrameRate()/62);
  text("Survival Time: "+ survivalTime, 250, 50);
  
  if (keyDown("space") && monkey.y >=100 ){
     monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  
  drawSprites();
}



function fruit(){
  if(frameCount % 100 === 0){
   var banana = createSprite(600,400,20,20); 
   banana.y = Math.round(random(200,100)); 
   banana.velocityX = -8;
   banana.addImage("b",bananaImage);
   banana.scale=0.1;
   banana.lifetime = 100; 
  
   foodGroup.add(banana); 
    
  }
  
}
  
  function obstacles(){
   if (frameCount % 300 === 0){
  var obstacle = createSprite(400,395,10,10)
      obstacle.addImage(obstacleImage)
   obstacle.velocityX = -6
       obstacle.scale = 0.2;
    obstacle.lifetime = -1;
     
     
     obstacleGroup.add(obstacle);
      }
}