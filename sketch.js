var bulletobject,speed,weight,wall,thickness;
function setup() {
  createCanvas(1600,400);
  bulletobject =createSprite(50,200,20,20);
  bulletobject.shapeColor = "white";
  wall = createSprite(1500,200,60,400);
  wall.shapeColor = (80,80,80);
  
}

function draw() {
  background(0,0,0);  
  weight = random(400,1500);
  speed = random(30,95);
  thickness = random(22,83);
  bulletobject.velocityX = 9;
  if(wall.x - bulletobject.x < bulletobject.width/2 + wall.width/2){
    bulletobject.velocityX = 0;
    if(((0.5*weight*speed*speed)/22500)<100){
      bulletobject.shapeColor = "green";
    
    }
      if (((0.5*weight*speed*speed)/(thickness*thickness*thickness))>10) {
        wall.shapeColor = "red";
      } else {
        wall.shapeColor = "green";
      }
  }
 
  
  drawSprites();
}