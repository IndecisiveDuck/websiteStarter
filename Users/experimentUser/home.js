function setup(){
  createCanvas(windowWidth, windowHeight);
  let backgroundColor = document.getElementById('colors').innerHTML
}
function draw(){
  background(backgroundColor);
  fill(squareColor);
  rect(50,50,100);
}
