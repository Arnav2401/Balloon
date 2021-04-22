var balloon,balloonImage1,balloonImage2;
var database
var position 
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
  database.ref('balloon/position').on("value",function(data){
    position= data.val()
    balloon.x = position.x
    balloon.y = position.y


  })
}

// function to display UI
function draw() {
  background(bg);

  if(position!= undefined){
    if(keyDown(LEFT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in left direction
    changeposition(-3,0)
    }
    else if(keyDown(RIGHT_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in right direction
      changeposition(3,0)
    }
    else if(keyDown(UP_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in up direction
      changeposition(0,-3)
      balloon.scale=balloon.scale-0.005
  
    }
    else if(keyDown(DOWN_ARROW)){
      balloon.addAnimation("hotAirBalloon",balloonImage2);
      //write code to move air balloon in down direction
      changeposition(0,3)
      balloon.scale=balloon.scale+0.005
  
    }
  }


  

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}

function changeposition(x,y){
  database.ref('balloon/position').set({x:position.x+x,y:position.y+y})
}
