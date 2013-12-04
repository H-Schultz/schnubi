define([ 'module', 'jquery', 'Backbone' ], function( module, $ ){

    var Navbar = Backbone.View.extend({

        el: $('[data-type="' + module.id + '"]'),

        events: {
        },

        initialize: function(){
        },

        render: function(){
        }

    });

    $(function() {
        $(Navbar.prototype.el.selector).each(function(index, node) {
            new Navbar({el: node});
        });
    })

});