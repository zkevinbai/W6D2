class HanoiView {
    constructor(game, $el) {
        this.game = game;
        this.$el = $el;
        this.setUpBoard();
    }

    addTrash() {
        this.$el.addClass('trash');
    }

    setUpBoard() {
        let ul = $('<ul class="base">');

        for (let i = 0; i < 3; i++) {
            let li = $('<ul class="section">');
            ul.append(li);
        }

        this.$el.append(ul);
    }
}

module.exports = HanoiView;