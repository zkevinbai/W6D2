const View = require('./ttt-view') // require appropriate file
const Game = require('../../Nodesolution/game') // require appropriate file

$(() => {
  // Your code here;
  let game = new Game();
  let $el = $('figure');
  new View(game, $el);
});