var game_state = {};

var game = new Phaser.Game(320, 200, Phaser.AUTO, 'game_div', {
    preload: game_state.preload,
    create: game_state.create,
    update: game_state.update
});
