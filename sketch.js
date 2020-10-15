//Create variables here
var dog, happyDog, database, foodS, foodStock;


function preload()
{
  //load images here
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dog);
  
  
  foodStock=database.ref();
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  textSize(30);
  fill("purple");
  stroke("black");
  text("Note:press up to feed the dog",250,100);
}

function readStock(data){
  
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })

}

