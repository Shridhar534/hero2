var box1,box2,box3,box4
var hero

function preload(){
  hero_Image = loadAnimation("img/h1.png","img/ h2.png")
  //h2 has a space here ----> _h2.png//
}

function setup(){
  createCanvas(1980,1080)
  
  hero = createSprite(500,500,50,50)
  hero.addAnimation("hero",hero_Image)


}
function draw(){
background("skyblue")

hero.x=mouseX
hero.y=mouseY

  drawSprites()
}
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//
//********************function draw ends here*********************//


function countrol(){
  if(keyDown("upArrow")){
    hero.position.y=hero.position.y-5
  }
}