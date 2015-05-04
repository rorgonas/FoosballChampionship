define([
    'text!../scripts/players/test/JSON/playersJSON.js'
], function(PlayersJSON) {

    // Marionette Demo App service calls

    // Players List
    $.mockjax({
        url: '/rest/players',
        responseTime: 750,
        dataType: 'json',
        contentType: 'application/json',
        //responseText: {
        //    first_name: "Zoltan",
        //    last_name: "Pap",
        //    email: "zoltan.pap@gmail.com"
        //},
        responseText: PlayersJSON,
        type: 'GET',
        status: 200
    });
});
