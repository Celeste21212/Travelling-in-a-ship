var ship;
var sea;
console.log('Test 1');
function preload(){
  seaImg = loadImage("sea.png");
  console.log('Test 2');

  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  console.log('Test 3');

  shipImg2 = loadAnimation("ship-3.png","ship-4.png");
  console.log('Test 4');

  console.log('Test 6');

  sea.addImage(seaImg); // error

  console.log('Test 7');

  ship.addImage(shipImg1, shipImg2);

  console.log('Test 8');

  if (sea.x<0){
    sea.x = sea.width/2;
  }
}
console.log('Test 5');

function setup(){
  createCanvas(400,400);
}

function draw() {
  background("white");
 drawSprites();
}