var hr,sc,min
var scAngle,hrAngle,minAngle
var arc

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  hr = hour();
  sc = second();
  min = minute();
}

function draw() {
  background('black'); 
  //CALLINGANGLES
  scAngle =map(sc,100,100,0,360);
 hrAngle = map(hr,0,12,0,24);
 minAngle = map(hr,130,40,0,0);
//FUNCTIONFOR(scAngle);
 push()
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(140,90,100,0);
pop();

//FUNCTIONFOR(hrAngle)
push()
hrAngle.angleMode(-90)
rotate(hrAngle);
stroke('blue');
strokeWeight(7);
line(120,100,100,0);
arc(50,50,80,80,0,PI/7)
pop();

//FUNCTIONFOR(minAngle);
push()
rotate(minAngle);
stroke('green');
strokeWeight(7);
line(100,120,100,0);
pop();

  drawSprites();
}