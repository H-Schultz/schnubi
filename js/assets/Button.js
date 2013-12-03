define([ 'module', 'jquery', 'Backbone' ], function( module, $ ){

    var Button = Backbone.View.extend({

        el: $('[data-type="' + module.id + '"]'),

        events: {
        },

        initialize: function(){
        },

        render: function(){
        }

    });

    $(function() {
        $(Button.prototype.el.selector).each(function(index, node) {
            new Button({el: node});
        });
    })

});