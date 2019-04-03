var express = require("express")
const path = require("path")

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//requiring the routing files
require(path.join(__dirname, './app/routing/apiRoutes'))(app)
require(path.join(__dirname, './app/routing/htmlRoutes'))(app)

//shows listening on console
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})