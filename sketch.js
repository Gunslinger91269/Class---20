function setup() {
  createCanvas(800,400);
  mrect = createSprite(400, 200, 50, 50);
  frect = createSprite(200, 200, 75, 75);
  mrect.shapeColor = ("red")
  frect.shapeColor = ("red")
  mrect.debug = true
  frect.debug = true
}

function draw() {
  background(100,76,250); 
  mrect.x = mouseX 
  mrect.y = mouseY

  if(mrect.x-frect.x<mrect.width/2+frect.width/2&&frect.x-mrect.x<mrect.width/2+frect.width/2){
    mrect.shapeColor = ("yellow")
    frect.shapeColor = ("yellow")
  }
  else if(mrect.y-frect.y<mrect.height/2+frect.height/2&&frect.y-mrect.y<mrect.height/2+frect.height/2){
    mrect.shapeColor = ("green")
    frect.shapeColor = ("green")
  }
  else{
    mrect.shapeColor = ("red")
    frect.shapeColor = ("red")
  }

  

  drawSprites();
}