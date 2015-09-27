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
            console.log($("#username").val());
            console.log($("#password").val());
            var loginData = {
                login: $("#username").val(),
                password: $("#password").val()
            };
            $.post("/login", loginData, function(isauth) {
                console.log(isauth);
                if(isauth) {
                    alert("You are logged in!");
                } else {
                    alert("Your login or password isn't correct");
                }
            }, "json");
        }

    });

    return new LoginView();
});
