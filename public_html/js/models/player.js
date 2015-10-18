define([
    'backbone'
], function(
    Backbone
){

    var playerModel = Backbone.Model.extend({
        
        defaults: {
            name : "",
            auth : false,
            chipColor: "blue"
        },
        
        initialize : function() {
            console.log("PlayerModel is created");
        }
        
    });
    
    return new playerModel();
});
