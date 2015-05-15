Enemy = function (game) {};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Player;

Enemy.prototype.update = function() {};