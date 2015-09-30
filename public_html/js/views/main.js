define([
    'backbone',
    'tmpl/main'
], function(
    Backbone,
    tmpl
){

    var MainView = Backbone.View.extend({
        el: '.page',        
        template: tmpl,
        events: {
            "click .js_logout_btn": "logout"
        },
        
        initialize: function () {
            console.log("MainView has been created");
            $(".js_logout_btn").hide();
        },
        
        render: function () {
            this.$el.html(this.template) 
            $(".js_logout_btn").hide();
        },
        show: function () {
            $(this.el).show();
        },
        
        hide: function () {
            $(this.el).hide();
        },
        
        load: function () {
            this.render();
            this.show();
        },
        
        logout: function() {
            $.get("/logout", this.model.toJSON(), function(response){
                
            }, "json")
        }
        
        //------ EVENT FUNCTIONS ------------//
    });

    return new MainView();
});
