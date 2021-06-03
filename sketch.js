var stoneImg, stone, stonesGroup;
var pluto, plutoImg;
var road,roadImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  roadImg = loadImage("bg.png");
  stoneImg = loadImage("stone.png");
 // climberImg = loadImage("climber.png");
  plutoImg = loadImage("pluto2","pluto4");
  //spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(1200,600);
  
  road = createSprite(1200,500);
  road.addImage("road",roadImg);
  
  road.velocityX = -1;
  
  roadsGroup = new Group();
  
  invisibleBlockGroup = new Group();
  
  pluto = createSprite(200,475,50,50);
  pluto.scale = 0.2;
  pluto.addImage("pluto", plutoImg);
}

function draw(){
  
  if (gameState === "play") {
    if(keyDown("left_arrow")){
      pluto.x = pluto.x - 3;
    }
    
    if(keyDown("right_arrow")){
      pluto.x = pluto.x + 3;
    }
    
    if(keyDown("space")){
      pluto.velocityY = -10;
    }
    
    pluto.velocityY = pluto.velocityY + 0.8
    
    if(road.x > 1200){
      road.x = 50;
    }


    spawnStones();


    //climbersGroup.collide(ghost);
    if(stonesGroup.isTouching(pluto)){
      pluto.velocityX = 0;
      gameState ="end"
    }
    
    
    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("red");
    fill("red");
    textSize(30);
    text("Game Over", 230,250)
  }

}

function spawnStones() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
    var spawnStones = createSprite(200, 475);
    
    var invisibleBlock = createSprite(200,475);
    invisibleBlock.width = 1200;
    invisibleBlock.height = 20;
    
    stone.x = Math.round(random(120,1100));
    
    invisibleBlock.x = road.x;
    
    stone.addImage(stoneImg);
    
    stone.velocityX = -1;
    invisibleBlock.velocityX = -1;
    pluto.collide(invisibleBlockGroup);
    //ghost.depth = door.depth;
    //ghost.depth +=1;
   
    //assign lifetime to the variable
    stone.lifetime = 800;
    //climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //add each door to the group
    stonesGroup.add(stone);
    invisibleBlock.debug = true;
    //climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}