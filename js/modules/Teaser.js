define([ 'module', 'jquery', 'Backbone' ], function( module, $ ){

    var Teaser = Backbone.View.extend({

        el: $('[data-type="' + module.id + '"]'),

        events: {
        },

        initialize: function(){
        },

        render: function(){
        }

    });

    $(function() {
        $(Teaser.prototype.el.selector).each(function(index, node) {
            new Teaser({el: node});
        });
    })

});