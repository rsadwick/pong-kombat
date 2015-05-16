RedPaddle = function (game, rotateSpeed) {
    Phaser.Sprite.call(this, game, game.width - 10, game.height / 2, 'paddle');
    this.game = game;
    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = rotateSpeed;
    this.scale.setTo(0.1, 0.3);
    this.cursors = game.input.keyboard.createCursorKeys();
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.collideWorldBounds = false;

    this.trackSpeed = 60;

    this.game.add.existing(this);

};

RedPaddle.prototype = Object.create(Enemy.prototype);

RedPaddle.prototype.constructor = RedPaddle;

RedPaddle.prototype.update = function() {
    this.angle += this.rotateSpeed;
};

RedPaddle.prototype.getTrackSpeed = function() {
    return this.trackSpeed;
};