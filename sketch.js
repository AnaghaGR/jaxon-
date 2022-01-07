var jaxon_running , path , pathImage,jaxon ;
function preload(){
  jaxon_running=loadAnimation("Runner-2.png","Running-1.png")
  pathImage = loadImage ( "path.png")
}

function setup(){
  createCanvas(400,400);
  jaxon = createSprite(50,160,20,50);
  jaxon.addAnimation("running",Runner2.png)
  jaxon.scale = 0.5
}

function draw() {
  background(0);

}
path.createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2
if(path.y>400){
  path.y = height/2;
}
