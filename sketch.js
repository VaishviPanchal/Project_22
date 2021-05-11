var starImg,bgImg;
var star, starBody;
var fairy,fairyImg,fairyBody;
var fairySound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
    fairySound = loadSound("sound/JoyMusic.mp3")

}

function setup() {
	createCanvas(800, 750);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    
    fairy = createSprite(200,500);
	fairy.addAnimation("fly",fairyImg);
	fairy.scale = 0.30;

	fairySound.play();

	engine = Engine.create();
	world = engine.world;
	World.add(world,fairy);

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y
  //console.log(star.y);

 
  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
	    Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if (keyCode === LEFT_ARROW) {
       fairy.position.x=fairy.position.x-20
	}
	if (keyCode === RIGHT_ARROW) {
		fairy.position.x=fairy.position.x+20
	 }
	
}
