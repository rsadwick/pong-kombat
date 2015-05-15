//title screen state
game_state.match = function (game) {};

game_state.match.prototype = {
    level: null,
    player: null,

    preload: function () {
        level = new Level(game);
        level.preload();
        //load a player.preload()
        //load a ball.preload()
    },

    create: function () {
        level.create();

        /*for(var powerup in powerups){
            powerups[powerup].create();
        }*/
    },

    update: function () {
        level.update();

        /*for(var powerup in powerups){
            powerups[powerup].update();
        }*/
    },

     render: function () {
        level.render();
    }
}