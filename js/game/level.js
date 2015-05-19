var Level = function (game) {
    this.game = game;
    this.player;
    this.enemy;
    this.ball;
    this.background;
}

Level.prototype.init = function (game) {
    this.game = game;
};

Level.prototype.preload = function () {
};

Level.prototype.create = function () {

    //events
    // this.game.events.onPlayerSomething.add(this.doSomething, this);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.background = this.game.add.tileSprite(0, 0, 320, 200, 'zone1');

    //create player
    this.player = new Player(this.game, 2);

    //enemy:
    this.enemy = new RedPaddle(this.game, 3)

    //ball
    this.ball = new Ball(this.game);
    this.ball.create();
};

Level.prototype.update = function () {

    this.player.update();
    this.enemy.update();
    this.ball.update();

    //collision
    this.game.physics.arcade.collide(this.player, this.ball, this.onBounce, null, true);
    this.game.physics.arcade.collide(this.enemy, this.ball, this.onBounce, null, true);
    if (this.ball.alive && this.ball.body.velocity.x >= 100) {
        if(this.ball.body.velocity.y > 200){
            this.ball.body.velocity.y = 100;
            this.ball.body.velocity.x = 400;
        }
        this.game.add.tween(this.enemy).to({ y: this.ball.body.y }, this.enemy.getTrackSpeed(), Phaser.Easing.Power2, true);
    }
};

Level.prototype.onBounce = function (paddle, ball) {

};


Level.prototype.dispose = function () {
    //goodbye
};

Level.prototype.render = function(){
      //this.game.debug.bodyInfo(this.ball, 32, 32);
    //  this.game.debug.body(this.player);
 //     this.game.debug.body(this.enemy);
}