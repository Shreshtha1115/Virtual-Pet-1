var dog,happyDog,database,foodS,foodStock

function preload()
{
  dogHappy = loadImage("dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)


}


function draw() {  
  background(46, 139, 87);
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(dogHappy);

    }



  drawSprites();
  //add styles here

}

function writeStock(x){
if(x<=0){
    x = 0 
}else{
  x = x-1

}
database.ref('/').update({Food:x})


}
function readStock(data){
  foodS = data.val();
  
}
