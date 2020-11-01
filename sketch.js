var fixedbox,movingbox

function setup() {
  createCanvas(400,400);
  fixedbox = createSprite(200,200,40,40)
  movingbox = createSprite(200,50,40,40)
  movingbox.shapeColor="green"
  fixedbox.shapeColor="blue"
  movingbox.velocityY=3
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //movingbox.y=World.mouseY
  //movingbox.x=World.mouseX

  bounceOff()

}

function bounceOff (){
if(fixedbox.x-movingbox.x < fixedbox.width/2 + movingbox.width/2 &&
  movingbox.x-fixedbox.x < fixedbox.width/2+movingbox.width/2){
  movingbox.velocityX = movingbox.velocityX * (-1)
}

if(fixedbox.y-movingbox.y < fixedbox.height/2 + movingbox.height/2 &&
  movingbox.y-fixedbox.y < fixedbox.height/2+movingbox.height/2){
  movingbox.velocityY = movingbox.velocityY * (-1)
}

}

function collision(){
  if(fixedbox.x-movingbox.x < fixedbox.width/2+movingbox.width/2 && 
    movingbox.x-fixedbox.x < fixedbox.width/2+movingbox.width/2 &&
    movingbox.y-fixedbox.y < fixedbox.height/2+movingbox.height/2 &&
    fixedbox.y-movingbox.y < fixedbox.height/2+movingbox.height/2){
    movingbox.shapeColor="red";
    fixedbox.shapeColor="red" ;
  }
  else{
    movingbox.shapeColor="green";
    fixedbox.shapeColor="blue";
  }
}