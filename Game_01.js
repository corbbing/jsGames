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
  this.health = 100;
  this.armor= 0;
  this.maxHealth = 100;
  this.stamina = 0;
  this.maxStamina = 100;
  this.pos = pt(0,0);
  this.vc = vec(0,0);
  this.size = {w: 0, h: 0};
  this.rot = 0;
  this.speed = 1;
  this.maxSpeed = 1;
  this.fx = [];
  this.armorSlots = [];
  this.inventory = [];
}

function getArmor(player){
  player.armor = 0;
  for (var i = 0; i < player.armorSlots.length; ++i){
    player.armor += player.armorSlots[i].armor;
  }
}

player.prototype.addEffect=function(effect){
  this.fx.push(effect);
}

function hurt(player,dmg){
  return player.health - (dmg - (dmg * (1/this.armor)));
}

player.prototype.draw = function(ctx){
  for (var i = 0; i < fx.length; ++i){
    if (this.fx[i].id == 0){
      this.health -= this.fx.value;
      this.fx[i].duration += 1;
    }
    if (this.fx[i].id == 1){
      this.stamina = this.maxStamina * this.fx.value;
      this.fx[i].duration += 1;
      if (this.fx[i].duration = 0){
        delete this.fx[i];
      }
    }
  }
  ctx.save();
  ctx.fillStyle="050";
  ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
  ctx.fillStyle="#0f0";
  ctx.fillRect(this.pos.x, this.pos.y, this.size.w * this.health/this.maxHealth, this.size.h);
  this.vc.vx = Math.cos(this.rot * Math.PI * 2) * this.speed;
  this.vc.vy = Math.sin(this.rot * Math.PI * 2) * this.speed;
  this.pos = addVec(this.pos, this.vc);
  ctx.restore();
}

function effect(){
  this.id=0;
  this.value = 0;
  this.duration = 0;
  this.maxDuration = 100;
  this.name = "";
}

function armor(){
  this.armor = 0;
  this.specials = [];
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




