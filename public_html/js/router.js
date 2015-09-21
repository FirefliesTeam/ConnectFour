define([
    'backbone'
], function(
    Backbone
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        
        var $page =$("#page");
        
        defaultActions: function () {
            this.navigate(#, {trigger: true});    
        },
        scoreboardAction: function () {
            // TODO
        },
        gameAction: function () {
            // TODO
        },
        loginAction: function () {
            // TODO
        }
    });

    return new Router();
});
