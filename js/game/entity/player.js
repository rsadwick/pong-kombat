Player = function (game, rotateSpeed) {
    Phaser.Sprite.call(this, game, game.width / 9, game.height / 2, 'paddle');

    this.game = game

    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = rotateSpeed;

    var randomScale = 0.5;

    this.scale.setTo(randomScale, randomScale);

    this.cursors = game.input.keyboard.createCursorKeys();

    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.immovable = true;

    this.game.add.existing(this);

};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {

    this.angle += this.rotateSpeed;

    //  Reset the players velocity (movement)
    this.body.velocity.y = 0;

    if (this.cursors.up.isDown)
    {
        //  Move up
        this.body.velocity.y = -150;
    }
    else if (this.cursors.down.isDown)
    {
        //  Move down
        this.body.velocity.y = 150;
    }
    else
    {
        //  Stand still
        //player.animations.stop();
        //player.frame = 4;
    }
};