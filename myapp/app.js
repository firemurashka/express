var express = require('express');
var app = express();
const port=3000;
app.get('/', function (req, res) {
	res.send('Hello World Vika!');
});

app.listen(port, function () {
	console.log(`Example app listening on port ${port}!`);
});

//node app.js