Player = function (game, rotateSpeed) {

    //  We call the Phaser.Sprite passing in the game reference
    //  We're giving it a random X/Y position here, just for the sake of this demo - you could also pass the x/y in the constructor
    Phaser.Sprite.call(this, game, game.world.randomX, game.world.randomY, 'paddle');

    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = rotateSpeed;

    var randomScale = 0.1 + Math.random();

    this.scale.setTo(randomScale, randomScale);

    game.add.existing(this);

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {

    //  Automatically called by World.update
    this.angle += this.rotateSpeed;

};

function preload() {}