const HanoiView = require('./toh-view')
const HanoiGame = require('../../NodeSolutionHanoi/game')


$(() => {
  const $el = $('figure');
  const game = new HanoiGame();
  new HanoiView(game, $el);
});