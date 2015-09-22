define([
    'router',
    'backbone',
    'tmpl/main'
], function(
    Router,
    Backbone,
    tmpl
){

    var MainView = Backbone.View.extend({
        el: '.page',        
        template: tmpl,
        events: {
            "click .js_startgame": "startgame",
            "click .js_scoreboard": "showScoreboard",
            "click .js_login": "login"
        },
        
        initialize: function () {
            console.log("MainView has been created");
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template) 
        },
        show: function () {
            $(this.el).show();
        },
        
        hide: function () {
            $(this.el).hide();
        },
        
        //------ EVENT FUNCTIONS ------------//
        
        startgame: function() {
            this.hide();
            Router.navigateTo('game');
        },
        
        showScoreboard: function() {
            this.hide();
            Router.navigateTo('scoreboard');
        },
        
        login: function() {
            this.hide();
            Router.navigateTo('login');
        }

    });

    return new MainView();
});
