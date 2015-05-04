define([
    'marionette'
], function(Marionette) {

    var app = new Marionette.Application();

    app.addRegions({
        main: '#main'
    });

    app.on('before:start', function(){
       // nothing here
    });

    app.on('start', function(){
        console.log('Mariontte demo app started');
        if(!Backbone.History.started) {
            try {
                Backbone.history.start();
                console.log('App history started.');
            } catch(e) {
                console.log('Failed to start Backbone history: ' + e);
            }
        }
    });

    return app;
});
