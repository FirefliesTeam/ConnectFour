define([
    'backbone',
    'tmpl/game',
    'collections/cells',
    'models/player'
], function(
    Backbone,
    tmpl,
    gamefield,
    player
){

    var GameView = Backbone.View.extend({
        el: '.page',
        template: tmpl,
        model: gamefield,
        events: {
            'mouseenter .gamefield__column': 'chooseColumn',
            'click .gamefield__column': 'dropChip'
        },
        initialize: function () {
            console.log("GameView has been created");
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        show: function () {
            $(this.el).show()
        },
        hide: function () {
            $(this.el).hide()
        },
        load: function () {
            this.render();
            this.show();
        },
        chooseColumn : function(event) {
            column__id = event.currentTarget.attributes.getNamedItem("id").value;
            arrow_margin = 90 * column__id + 40;
            $(".gamefield__arrow").css({ marginLeft: arrow_margin});
        },
        
        dropChip: function(event) {
            cellPrintPosition = this.printChip(event);
            win = this.checkWin(cellPrintPosition);
            if (win === 1) {
                this.printWinnerMsg();
            } else if (win === 0) {
                this.delagateTurn()
            } else if (win === -1) {
                this.printLooserMsg();
            }
        },
        
        printChip: function(event) {
            column__id = event.currentTarget.attributes.getNamedItem("id").value;
            i = 5;
            filledCell = true;
            cellPlace = "null";
            while (i > 0 && filledCell) {
                filledCell = this.model.models[column__id*6 + i].get("isFill");
                if(filledCell) {
                    i--;
                }
                cellPlace = "#" + column__id + "__"+ i;
            }
            printPosition = column__id*6 + i;
            this.model.models[printPosition].set("isFill", true); 
            $(cellPlace).addClass("column__cell-" + player.get("chipColor"));
            return printPosition; 
        }, 

    });

    return new GameView();
});
