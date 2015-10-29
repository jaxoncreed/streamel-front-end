var request = require('superagent');
var route = require('../configs/externalRoutes.json').streamelApi;

module.exports = {
    name: "recommended",
    read: function(req, resource, params, config, callback) {
        request
            .get(route + '/meta')
            .end(function(err, res) {
                if (err) {
                    // TODO: Handle error
                    console.log("error in search service");
                    console.log(err);
                } else {
                    callback(null, res.body);
                }
            });
    }
}