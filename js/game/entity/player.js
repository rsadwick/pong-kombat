Player = function (game, rotateSpeed) {
    Phaser.Sprite.call(this, game, 10, game.height / 2, 'paddle');

    this.game = game

    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = rotateSpeed;

    this.scale.setTo(0.1, 0.3);

    this.cursors = game.input.keyboard.createCursorKeys();

    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.immovable = true;
    this.body.mass = 40;
    this.speed = 200;

    this.game.add.existing(this);

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {

    this.angle += this.rotateSpeed;

    this.body.velocity.y = 0;

    if (this.cursors.up.isDown)
    {
        this.body.velocity.y = -this.speed;
    }
    else if (this.cursors.down.isDown)
    {
        this.body.velocity.y = this.speed;
    }
    else
    {
       //stationary if needed
    }
};