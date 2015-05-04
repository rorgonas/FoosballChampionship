define([
    'marionette',
    'app',
    'players/controllers/listController'
], function(
    Marionette,
    App,
    ListController
){
    var gameAPI = {
        displayPlayers: function() {
            ListController.show({
                region: App.main,
                context: App.context
            });
        },
        previewPlayer: function(id) {
            // add controller
        },
        editPlayer: function(id) {
            // add controller
        },
        createPlayer: function() {
            // add controller
        }

    };

    return gameAPI;
});
