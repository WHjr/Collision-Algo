function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 20, 20);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,300,20,20);
  movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(fixedRect.x - movingRect.x)
  
  if((Math.abs(fixedRect.x - movingRect.x) < fixedRect.width/2 + movingRect.width/2) &&
    (Math.abs(fixedRect.y - movingRect.y) < fixedRect.height/2 + movingRect.height/2)) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}