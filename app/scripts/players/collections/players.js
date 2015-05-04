/*global define*/

define([
    'backbone',
    '../models/player'
], function (Backbone, Player) {
    'use strict';

    var Players = Backbone.Collection.extend({
        model: Player,
        url: '/rest/players',
        parse: function(response) {
            return response;
        }
    });

    return Players;
});
