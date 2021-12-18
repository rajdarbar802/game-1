var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var obsTop1,obsTop2
var obsBottom1,obsBottom2,obsBottom3
var gameOver
var restart
var obstacalegroup

function preload(){
bgImg = loadImage("assets/bg.png")
gameOver=loadImage("assets/gameOver.png")
obsBottom1=loadImage("assets/obsBottom1.png")
obsBottom2=loadImage("assets/obsBottom2.png")
obsBottom3=loadImage("assets/obsBottom3.png")
obsTop1=loadImage("assets/obsTop1.png")
obsTop2=loadImage("assets/obsTop2.png")
gameOver=loadImage("assets/gameOver.png")
restart=loadImage("assets/restart.png")



balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){
 createCanvas(630,630)
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.velocityX=-2

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
  background("black");
  
          
    //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
          }
          

        if(bg.x<0){
          bg.x=bg.width/2
        }
          

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
           spwanBuildings()
   spwanObsticales()
        drawSprites();
        
}
function spwanObsticales() {
  if (frameCount%60==0) {
    var obsTop=createSprite(600,160,10,30)
    obsTop.addImage("ob2",obsTop2)
    obsTop.velocityX=-2
    obsTop.scale=0.5
    obsTop.lifetime=300
   
   
}

}
function spwanBuildings(){
 if (frameCount%60==0) {
  var obsTop=createSprite(600,20,10,30)

  obsTop.velocityX=-2
  obsTop.scale=0.5
  var ran=Math.round(random(1,3))
  switch (ran) {
    case 1:obsTop.addImage(obsBottom1) 
      break;
      case 2:obsTop.addImage(obsBottom2) 
      break;
      case 3:obsTop.addImage(obsBottom3) 
      break;
}
}
}