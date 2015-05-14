var game_state = {};
var game = new Phaser.Game(320, 240, Phaser.AUTO, 'game_div', {
    preload: game_state.preload,
    create: game_state.create,
    update: game_state.update
});

//title screen state
game_state.title = function (game) {};
game_state.title.prototype = {

    preload: function () {
        game.load.image("titlescreen", "assets/pongkombat.gif");
    },

    create: function () {
        var gameTitle = game.add.image(0, 0, "titlescreen");
        gameTitle.anchor.setTo(0, 0);
        game.stage.backgroundColor = '#4d4d4d';
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.input.onDown.add(this.activateFullScreen, this);
    },

    update: function () {},

    activateFullScreen: function () {
        game.scale.startFullScreen();
    }
}

game.state.add('title', game_state.title);
game.state.start('title');