define([
    'marionette',
    'handlebars',
    'text!../templates/singlePlayerTemplate.handlebars'
], function(Marionette, Handlebars, SinglePlayerTemplate) {

    var SinglePlayerView = Marionette.ItemView.extend({
        tagName: 'li',
        className: 'player-item',
        template: Handlebars.compile(SinglePlayerTemplate)
    });
    return SinglePlayerView;
});
