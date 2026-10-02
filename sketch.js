//heel weinig ascii's
let ascii = ["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m","!","@","#","$","%","&", ",",":","_","+","|","/","."];
let asciiColor = ["green", "white", "black", "red","blue"];
let shapeColor = ["green", "white", "black", "red","blue","purple","cyan", "orange"];
let patternVar = 0;
let start = true;

function setup() {
  createCanvas(800, 600);
}

function mouseClicked() {
  if (start == false && patternVar == 1) {
  fill("yellow");
  text(random(ascii),round(mouseX/30)*30 - 10,round(mouseY/30)*30 + 20);
  } else if (start == false && patternVar == 2) {
  fill("yellow");
  square(round(mouseX/30)*30 - 20,round(mouseY/30)*30 + 5,20);
  } else if (start == false && patternVar == 3) {
  fill("yellow");
  circle(round(mouseX/30)*30 - 10,round(mouseY/30)*30 + 15,20);
  }
}

function draw() {
  textSize(20);
  textFont('JetBrainsMono NF')
  if (keyIsPressed == true) {
    if (keyCode == 49) {
      background("black");
      for (let x = 0; x < 20; x++ ) {
        for (let y = 0; y < 20; y++) {
         fill(random(asciiColor))
         text(random(ascii),x * 30 + 110, y * 30 + 20);
         start = false;
         patternVar = 1;
        }
      }
    }
  } if (keyIsPressed == true) {
    if (keyCode == 50) {
      background("black");
      for (let x = 0; x < 20; x++ ) {
        for (let y = 0; y < 20; y++) {
         fill(random(shapeColor))
         square(x * 30 + 100, y * 30 + 5,20);
         start = false;
         patternVar = 2;
        }
      }
    }
  } if (keyIsPressed == true) {
    if (keyCode == 51) {
      background("black");
      for (let x = 0; x < 20; x++ ) {
        for (let y = 0; y < 20; y++) {
         fill(random(shapeColor))
         circle(x * 30 + 110, y * 30 + 15,20);
         start = false;
         patternVar = 3;
        }
      }
    }
  } if (start == true) {
    background("black");
    textSize(20);
    fill("white");
    text("PatternGen, 1:Ascii's, 2:Pixels, 3:Circles",200,230);
    text("Once generated you can click to add yellow ascii's/shapes",150,260);
  }
}