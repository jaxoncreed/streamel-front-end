module.exports = function(context, payload, callback) {
    context.service.read('recommended', {}, {}, function(err, results) {
        if (err) {
            // TODO: Handle error
            console.log("Error on recommended action");
            console.log(err);
        } else {
            context.dispatch("RECOMMENDED_CONTENT_RECEIVED", results);
        }
        callback();
    });
};