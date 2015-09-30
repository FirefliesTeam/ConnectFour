define([
    'backbone',
    'tmpl/signup'
], function(
    Backbone,
    tmpl
){

    var signUpView = Backbone.View.extend({
        el: '.page',
        template: tmpl,
        events: {
            'click .js_sign_up': 'signUp'
        },
        initialize: function () {
            console.log("SignupView has been created");
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
        
        signUp: function() {
            $.post($(".form").attr("action"), $(".form").serialize(), function(response) {
              if(response.registered = true) {
                    console.log("You have been registered");
              } else if(response.login = "exist") {
                    console.log("Choice another name, user with this name already exists");
              } else if (!response.email) {
                    console.log("Smth wrong with youe email");
              } else if (!response.password) {
                    console.log("Smth wrong with your password");
              }
              
            }, "json");
        }

    });

    return new signUpView();
});
