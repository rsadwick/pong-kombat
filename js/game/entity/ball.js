Ball = function (game) {
    Phaser.Sprite.call(this, game, game.width / 2, game.height / 2, 'ball');

    this.game = game
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = 3;

    var randomScale = 0.2;

    this.scale.setTo(randomScale, randomScale);


    this.body.mass = 10;

    this.game.add.existing(this);

};

Ball.prototype = Object.create(Phaser.Sprite.prototype);
Ball.prototype.constructor = Player;

Ball.prototype.create = function(){
    this.body.velocity.setTo(100, 100);
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(1, 1);
}

Ball.prototype.update = function() {

    this.angle += this.rotateSpeed;
};