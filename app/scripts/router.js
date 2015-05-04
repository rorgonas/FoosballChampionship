define([
    'marionette'
], function(
    Marionette
) {

    var GameRouter = Marionette.AppRouter.extend({
        appRoutes: {
            'players': 'displayPlayers',
            'player/:id/preview': 'previewPlayer',
            'player/:id/edit': 'editPlayer',
            'player/:id/add': 'createPlayer'
        }
    });

    return GameRouter;
});
