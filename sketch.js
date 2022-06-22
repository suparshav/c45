var car,obsticle;
function preload(){
  car1=loadImage("car1.png");
  obsticle1=loadImage("obstical2.png");
  backgroundimg=loadImage("background.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  car = createSprite(width/2,height-100,30,30);
  car.addImage(car1);
car.scale=0.05
  obstical = new Group();
}

function draw() 
{
   background(30);
   image(backgroundimg,0,0,width,height);
   //camera.position.y=car.position.y
  if (keyIsDown(RIGHT_ARROW)) 
  {
    car.position.x = car.position.x +5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    car.position.x= car.position.x -5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    car.position.y = car.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  car.position.y = car.position.y + 5;
  }

  drawSprites();
  addSprites(obsticle,12,1,obsticle1);
  
}
 function addSprites(spriteGroup, numberOfSprites, scale,spriteImage) {
  for (var i = 0; i < numberOfSprites.length; i++) {
    var x, y;

    //C41 //SA
    
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(0,height);
    
    var sprite = createSprite(x, y);
    sprite.addImage(spriteImage);
    sprite.scale = scale;
    spriteGroup.add(sprite);
    
  }
}



