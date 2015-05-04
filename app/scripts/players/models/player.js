/*global define*/

define([
    'backbone'
], function (Backbone) {
    'use strict';

    var Player = Backbone.Model.extend({
        idAttribute: "player_id",
        defaults: {
            first_name: "",
            last_name: "",
            email: ""
        }
    });

    return Player;
});
