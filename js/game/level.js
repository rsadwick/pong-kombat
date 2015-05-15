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

    if (this.ball.alive && this.ball.body.velocity.x > this.game.width / 2) {
        this.game.add.tween(this.enemy).to({ y: this.ball.body.y }, 800, Phaser.Easing.Quadratic.Out, true);
    }
};

Level.prototype.onBounce = function (paddle, ball) {
    var diff = 0;
    if (ball.y < paddle.y) {
        //  Ball is on the left-hand side of the paddle
        diff = paddle.y - ball.y;
        ball.body.velocity.y = (-10 * diff);
    }
    else if (ball.y > paddle.y) {
        //  Ball is on the right-hand side of the paddle
        diff = ball.y - paddle.y;
        ball.body.velocity.y = (10 * diff);
    }
    else {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        ball.body.velocity.y = 2 + Math.random() * 8;
    }
};


Level.prototype.dispose = function () {
    //goodbye
};