define([
    'backbone',
    'tmpl/login'
], function(
    Backbone,
    tmpl
){

    var LoginView = Backbone.View.extend({
        el: '.page',
        template: tmpl,
        events: {
            'click .js_log_in': 'login'    
        },
        initialize: function () {
            console.log("LoginView has been created");
        },
        render: function () {
            this.$el.html(this.template)
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
        
        login: function() {
            console.log($(".form").attr("action"));
            console.log($(".form").serialize())
            $.post($(".form").attr("action"), $(".form").serialize(), function(response) {
                console.log(response);
                console.log(response.auth);
                if(response.auth) {
                    alert("You are logged in!");
                } else {
                    alert("Sorry, your login or password isn't correct");
                }
            }, "json");
        }

    });

    return new LoginView();
});
