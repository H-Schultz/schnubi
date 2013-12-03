define([ 'module', 'jquery', 'Backbone' ], function( module, $ ){

    var Accordion = Backbone.View.extend({

        el: $('[data-type="' + module.id + '"]'),

        events: {
            'accordion:toggle' : toggle,
            'accordion:open'   : open,
            'accordion:close'  : close
        },

        initialize: function(){

            // toggle
            $('[data-element="toggle"]', this.el).on( "click", _.bind( function( event ){
                this.$el.trigger( $.Event('accordion:toggle', { }));
            }, this ));

        },

        render: function(){
        }

    });

    function toggle(){
        if( this.$el.hasClass("open") ){
            this.$el.trigger( $.Event('accordion:close', { }));
        } else {
            this.$el.trigger( $.Event('accordion:open', { }));
        }
    }

    function open(){
        this.$el.removeClass("close").addClass("open");
    }

    function close(){
        this.$el.removeClass("open").addClass("close");
    }

    $(function() {
        $(Accordion.prototype.el.selector).each(function(index, node) {
            new Accordion({el: node});
        });
    })

});