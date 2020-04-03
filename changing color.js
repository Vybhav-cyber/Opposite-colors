var fixed_rect, moving_rect;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixed_rect = createSprite(200,200,50,100);
  moving_rect = createSprite(200,200,400, 400);
  
  moving_rect.shapeColor = "orange";
  fixed_rect.shapeColor = "orange";
  
}

function draw() {
  background(255,255,255);  

  console.log(moving_rect.x - fixed_rect.x);
  if (moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2
    ){
    moving_rect.shapeColor = "blue";
  fixed_rect.shapeColor = "green";
  }
  else{
    if mouseClicked(fixed_rect){
    moving_rect.shapeColor = "green";
    fixed_rect.shapeColor = "blue";
    var fixed_rect, moving_rect;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixed_rect = createSprite(200,200,50,100);
  moving_rect = createSprite(300,200, 50, 100);
  
  moving_rect.shapeColor = "orange";
  fixed_rect.shapeColor = "orange";
  
}

function draw() {
  background(255,255,255);  

  moving_rect.x = World.mouseX;
  moving_rect.y = World.mouseY;
  console.log(moving_rect.x - fixed_rect.x);
  if (moving_rect.x - fixed_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2
    && moving_rect.y - fixed_rect.y < fixed_rect.height/2 + moving_rect.height/2
    ){
    moving_rect.shapeColor = "blue";
  fixed_rect.shapeColor = "orange";
  }
  else{
   if mouseClicked(fixed_rect){
    moving_rect.shapeColor = "orange";
    fixed_rect.shapeColor = "blue";
   }
  }
  

  drawSprites();
}
  }
  

  drawSprites();
}