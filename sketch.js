var bg;


function setup() {
  createCanvas(displayWidth - 20, displayHeight-30);
  bg=loadImage("images.jpg")
  
}

function draw() {
  background(bg);  
  textSize(50);
  fill(248,0,0);  
  text("WE WELCOME Mr.SHARAN FOR TODAYS WORKSHOP",100,200);
  textSize(40);
  fill(0,0,248);
  text("Mr.SHARAN IS A VERY PROFFESIONAL MARATHON RUNNER HE IS VERY SPORTIVE",100,300);
  textSize(40);
  fill(0,248,0);
  text("AND ACTIVE HE IS WELL KNOWN AS A BAREFOOT RUNNER,EVERYBODY SHOULD BE",100,400);
  textSize(40);
  fill(248,91,0);
  text("MOTIVATED BY Mr.SHARAN .SO AT THE END OF THE PAGE I WANNA SAY THANK YOU",100,500);
  textSize(40);
  fill(248,248,0);
  text("TO HIM FOR SPARING US SOME OF HIS PRECIOUS TIME AND CONDUCTING A WORK SHOP",100,600);
  textSize(75);
  fill(255,255,255);  
  text("DONE BY -ARAVATAGI ROHAN",800,800);
  
  drawSprites();
}