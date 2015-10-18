define([
    'backbone',
    'models/cell'
], function(
    Backbone,
    Cell
){

    var Collection = Backbone.Collection.extend({
        model: Cell, 
        initialize: function() {
            this.fill();
        },
        comparator: function(model) {
            return -model.get("place");
        },
        
        fill : function() {
            columns = 7;
            rows = 6;
            for(var i=0; i<columns; i++){
                for(var j=0; j<rows; j++){
                    rand = Math.random();
                    if(rand < 0.5) {
                        this.add({ cell:"", column: "{i}", row: "{j}" });
                    } else {
                        this.add({ cell:"", column: "{i}", row: "{j}" });
                    }
                }
            }
        }
    });
        
    return new Collection();
});
