// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

module.exports = function(app) {
    console.log(friends)
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        friends.push(req.body)
        res.json(true)
    
    })
}