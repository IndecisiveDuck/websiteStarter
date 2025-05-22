function setup(){
  createCanvas(windowWidth, windowHeight);
}
function draw(){
  background(colorCodes.backgroundColor);
  fill(colorCodes.squR,colorCodes.squG,colorCodes.squB);
  rect(margin.sd,margin.ht,windowWidth-(margin.sd*2),windowHeight-(margin.ht*2));
}
