var express = require("express")
const path = require("path")

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, './app/public/index.html'));
// });

// // Survey page
// app.get('/survey', function(req, res) {
//     res.sendFile(path.join(__dirname, './app/public/survey.html'));
// });

//requiring the routing files
require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

//shows listening on console
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})