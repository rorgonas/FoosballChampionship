/*global require*/
'use strict';

require.config({
    baseUrl: 'scripts/',
    paths: {
        jquery:         '../bower_components/jquery/jquery',
        backbone:       '../bower_components/backbone/backbone',
        marionette:     '../bower_components/backbone.marionette/lib/backbone.marionette',
        underscore:     '../bower_components/underscore/underscore',
        bootstrap:      '../bower_components/sass-bootstrap/dist/js/bootstrap',
        handlebars:     '../bower_components/handlebars/handlebars',
        text:           '../bower_components/requirejs-text/text',
        mockjax:        '../bower_components/jquery-mockjax/jquery.mockjax',
        mockservice:    'mockservice/mockservice'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery', 'handlebars', 'mockservice'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        handlebars: {
            'exports': 'Handlebars'
        },
        'mockjax': {
            'deps': ['jquery']
        },
        'mockservice': {
            'deps': ['jquery', 'mockjax'],
            'exports': 'mockservice'
        }
    }
});

require([
    'marionette',
    'app',
    'router',
    'api'
], function (Marionette, App, Router, API) {

    App.addInitializer(function() {
        new Router({controller: API});
        console.log('Initializing demo app ...');
    });

    // Kick everything off
    App.start();

});
