define([
    'marionette',
    '../views/multiPlayerView',
    '../collections/players'
], function(
    Marionette,
    MultiPlayerView,
    Players
){
    var ListController = {

        show: function(obj) {
            // Get players
            var players = new Players();
            players.fetch();

            // Add players to the Collection view
            var view = new MultiPlayerView({collection: players});
            obj.region.show(view);
        }

    };

    return ListController;
});
