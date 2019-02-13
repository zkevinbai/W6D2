class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // Event is the click
    // Event has info about the click
    this.$el.on('click', '.box', (event) => {
      let $box = $(event.target); // Wrap to make int JQuery Object
      // console.log($box.data('pos'));
      if (!this.game.isOver()) {
        this.makeMove($box);
      }
    })
  }

  makeMove($box) {
    let num = $box.data('pos')

    let moves = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        moves.push([i, j])
      }
    }

    let pos = moves[num];
    // console.log(pos);
    this.game.playMove(pos);
    let cp = this.game.currentPlayer;

    $box.removeClass();
    $box.addClass(cp);
    $box.addClass('input');
    $box.text(cp);
    $box.attr('user-select', 'none');

    let winner = this.game.winner();

    if (winner) {
      let oClass;
      let xClass;
      let wintext;

      if (winner === "x") { // o is winner 
        oClass = 'win';
        xClass = 'lose';
        wintext = $('<h1>o is the winner</h1>');
      } else { //x is winner
        oClass = 'lose';
        xClass = 'win';
        wintext = $('<h1>x is the winner</h1>');
      }

      let xs = $('li.x');
      for (let i = 0; i < xs.length; i++) {
        xs.eq(i).addClass(`${xClass}`);
      }

      let os = $('li.o');
      for (let i = 0; i < os.length; i++) {
        os.eq(i).addClass(`${oClass}`);
      }

      this.$el.append(wintext);
    }

    if (!winner && this.game.isOver()) {
      $('li').addClass('lose');
      let wintext = $('<h1>its a draw</h1>');
      this.$el.append(wintext);
    }
  }

  setupBoard() {
    // this.$el.addClass('trash');
    let ul = $('<ul class="grid">');
    for (let li = 0; li < 9; li++) {
      let list = $('<li class="box">');
      list.data('pos', li);
      // console.log(list);
      ul.append(list);
    }

    this.$el.append(ul);
  }
}

module.exports = View;