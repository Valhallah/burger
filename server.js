const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');



var PORT = 3000;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));




app.listen(PORT);
console.log('Listening on port: ' + PORT);
