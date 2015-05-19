Enemy = function (game) {
    this.speed = 390
};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Player;

Enemy.prototype.update = function() {};

Enemy.prototype.moveUp = function(){
    this.body.velocity.y = this.speed;
}

Enemy.prototype.moveDown = function(){
    this.body.velocity.y = -this.speed;
}