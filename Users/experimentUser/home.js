function setup(){
  createCanvas(windowWidth, windowHeight);
  import{colorCodes}from'./Users/experimentUser/unoriginalFile.js';
}
function draw(){
  background(colorCodes.backgroundColor);
  fill(colorCodes.squareColor);
  rect(50,50,100);
}
