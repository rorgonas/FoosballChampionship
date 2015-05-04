define([
    'marionette',
    '../views/singlePlayerView'
], function(Marionette, SinglePlayerView) {

    var MultiPlayerView = Marionette.CollectionView.extend({
        tagName: 'ul',
        className: 'player-list',
        childView: SinglePlayerView
    });
    return MultiPlayerView;
});
