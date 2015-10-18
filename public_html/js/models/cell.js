define([
    'backbone'
], function(
    Backbone
){

    var cellModel = Backbone.Model.extend({
        
        defaults: {
            //cell may be blue, orange or undefined
            cell: "", 
            
            column: "",
            
            row: "",    
            
            isFill: false 
        },
        
        initialize : function() {
            console.log("CellModel is created");
        }
        
    });
    
    return cellModel;
});
