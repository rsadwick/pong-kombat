var Level = function (game) {
        this.game = game;
        this.player;
        this.background;
    }

    Level.prototype.init = function (game) {
        this.game = game;
    };

    Level.prototype.preload = function () {};

    Level.prototype.create = function () {

        //events
       // this.game.events.onPlayerSomething.add(this.doSomething, this);

        this.background = this.game.add.tileSprite(0, 0, 320, 200, 'zone1');

        this.player = new Player(this.game, 100);
        //this.player.create();
    };

    Level.prototype.update = function () {

        this.player.update();

        //background logic:
        /*if(!this.player.didSomething())
            this.background.tilePosition.x -= 0.7;
        else
            this.background.tilePosition.x += 0.3;*/

        //collision
        //this.game.physics.arcade.collide(this.player, this.ball, this.onBounce, null, this);

    };

    Level.prototype.onBounce = function(x, y){
        //boom
    };


    Level.prototype.dispose = function(){
        //goodbye
    };