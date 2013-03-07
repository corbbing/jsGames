//Game Utilities
//insert BEFORE any other code

var GU = {};

GU.point = function(x,y){

  return{x:x,y:y};

}

GU.dist(pt1,pt2){
  var dx = pt2.x - pt1.x;
  var dy = pt2.y - pt1.y;
  return Math.sqrt(Math.pow(dx,2) + Math.pow(dy, 2));
}

GU.vec(x,y){
  return {vx:x,vy:y};
}
