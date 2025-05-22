const colorCodes ={
  backgroundColor : 220,
  squR : 220,
  squG : 220,
  squB : 50
};
const margin ={
  sd : 50,
  ht : 50
};
const profile = function shapeShape(img){
  shape = createGraphics(50,50);
  shape.strokeWeight(20);
  shape.point(25,25);
  img.mask(shape);
};
