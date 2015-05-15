RedPaddle = function (game, rotateSpeed) {
    Phaser.Sprite.call(this, game, game.width - 30, game.height / 2, 'paddle');
    this.game = game
    this.anchor.setTo(0.5, 0.5);

    this.rotateSpeed = rotateSpeed;
    var randomScale = 0.5;
    this.scale.setTo(randomScale, randomScale);
    this.cursors = game.input.keyboard.createCursorKeys();
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.collideWorldBounds = true;

    this.trackSpeed = 230;

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