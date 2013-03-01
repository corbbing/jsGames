//Game_01.js

var canvas = document.createElement("canvas")
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;
document.body.appendChild(canvas);

window.onload = function(){
  
  ctx.fillRect(0,0,10,10);
  
}

function player(){
  this.pos = pt(0,0);
  this.vc = vec(0,0);
  this.size = {w: 0, h: 0};
}

player.prototype.draw = function(ctx){
  ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  this.pos = 
}

function addVec(pt,vec){
  var x = vec.vx + pt.x;
  var y = vec.vy + pt.y;
  return {x: x, y: y};
}

function vec(x,y){
  return {vx: x, vy:y};
}

function pt(x,y){
  return {x: x, y:y};
}
