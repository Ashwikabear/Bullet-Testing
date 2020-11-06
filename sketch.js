var bullet ,wall
var speed,thickness,weight
var damage


function setup() {
  createCanvas(1600,800);
  thickness = random(22,83)
  wall =createSprite(1200,200,thickness,height/2)
  wall.shapeColor= (80,80,80)
  speed = random(223,331)
  weight= random(30,52)
  bullet = createSprite(500,200,20,20)
  bullet.shapeColor="brown"
  bullet.velocityX= speed
  wall.shapeColor="brown"



  
}

function draw() {
  background(255,255,255);
  
  if(isColliding(bullet,wall)){
    bullet.velocityX=0
    damage= (.5 * weight*speed*speed)/(thickness*thickness*thickness)
    if(damage>10){
      wall.shapeColor= color(255,0,0)
      
      text("Unsafe",20,20)
    }
    if (damage<10){
  
      wall.shapeColor= color(0,255,0)
      text("Safe",20,20)
    }
    isColliding(bullet,wall)
  } 
  drawSprites();
}

function isColliding(bullet,wall){
 var bulletRightEdge= bullet.x+bullet.width
 var wallLeftEdge = wall.x
if(bulletRightEdge>=wallLeftEdge )
{
return true
}
return false;
}