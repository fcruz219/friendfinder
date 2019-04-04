// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

module.exports = function(app) {
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
        var userinput = req.body;
        console.log(userinput)
        var match;
        var totalDifference = 1000
		//loops through the friends scores
		for (i = 0; i < friends.length; i++) {
            var diff = 0;
			// loops through the new user score
			for (j = 0; j < friends[i].scores.length; j++) {
                diff += Math.abs(parseInt(userinput.scores[j]) - parseInt(friends[i].scores[j]));
            }

            
            if (diff < totalDifference) {
                totalDifference = diff;
                match = friends[i]
            }
           
			
		}

		friends.push(userinput);
        res.json(match);
        
	});
};
