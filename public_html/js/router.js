define([
    'backbone',
    'views/main',
    'views/scoreboard',
    'views/login',
    'views/game'
], function(
    Backbone, MainView, ScoreboardView, LoginView, GameView
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        
        navigateTo: function(url) {
            console.log("navigate to" + url);
            this.navigate(url, {trigger:true});
        },
        
        defaultActions: function () {
            console.log("url = #");
        },
            
        scoreboardAction: function () {
            console.log("url = #scoreboard");
        },
        gameAction: function () {
            console.log("url = #game");
        },
        loginAction: function () {
            console.log("url = #login");
        }
        
        
    });

    return new Router();
});
