//title screen state
game_state.title = function (game) {};

game_state.title.prototype = {

    preload: function () {
        game.load.image('title', 'assets/pongkombat.gif');
        game.load.image('paddle', 'assets/paddle.png');
        game.load.image('zone1', 'assets/zone1.png');
    },

    create: function () {
        var gameTitle = game.add.image(0, 0, 'title');
        gameTitle.anchor.setTo(0, 0);
        game.stage.backgroundColor = '#4d4d4d';
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.input.onDown.add(this.startFullScreen, this);

        //keyboard
        var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        space_key.onDown.add(this.startMatch, this);
    },

    update: function () {},

    startFullScreen: function () {
        game.scale.startFullScreen();
    },

    startMatch: function(){
        game.state.start('match');
    }
}