Enemy = function (game) {};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Player;

Enemy.prototype.update = function() {};

Enemy.prototype.moveUp = function(){
    this.body.velocity.y = 90;
}

Enemy.prototype.moveDown = function(){
    this.body.velocity.y = -90;
}