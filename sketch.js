
var asteroid1 ,asteroid2 , asteroid3 , asteroidGroup ;
var astronaut  
var asteroidimg , asteroidimg2

var gameState = 0 ;
var earth , earthImg
var score = 0 ; 

function preload()
 
// astronautimg = loadImage ("")
//asteroidimg = loadImage("asteroid2.png")
// asteroidimg2 = loadImage("")
 //earthImg = loadImage("earth.png")

{
	
}

function setup() {
	createCanvas(800, 700);
 
  astronaut  = createSprite(100,130, 50 , 50 );
 asteroidGroup = new Group ();
 Asteroids(50 ,50);
}


function draw() {

  background("blue");
  
  // if (gameState === 0 ){
  //   text ("press space key to start the game " ,400 ,400 )
  //   }

    earth = createSprite (400 , 650 , 200 ,200)
  //  earth.addImage(earthimg)
 
    //  if (keyDown("space")){
    //    gameState = 1 ; 
    //    earth = createSprite (400 , 650 , 200 ,200)
    //    //  earth = addImage (earthimg)
    //  Asteroids(50 ,50);
    
    //  }
    //  if(astronaut.isTouching(asteroidGroup)){
    //   score = score + 1 
    // }
  drawSprites();
 
}

