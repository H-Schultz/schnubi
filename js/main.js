require.config({

    baseUrl: '/js',

    shim: {
        'Backbone': {
            deps: [ 'Underscore', 'jquery'],
            exports: 'Backbone',
            init: function(_, jq) {
                Backbone.$ = jq.noConflict(true);
            }
        },
        'Underscore': {
            exports: '_'
        }
    },

    map: {
    },

    paths : {
        'jquery' : 'libs/jquery-1.10.2',
        Backbone: 'libs/backbone-1.1.0',
        Underscore: 'libs/underscore-1.5.2'
    },

    config: {
    }

});

require([ 'jquery' ], function($) {

});