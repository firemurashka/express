var express = require('express');
var app = express();
const port = 3000;

app.use(express.json());

function authenticate(req, res) {
	if (req.body.role === 'Admin') {
		console.log('Authenticated');
	} else {
		console.log('Unauthotized');
	}
}

app.use(authenticate);
app.listen(port, () => {
	console.log(`The server is listening on port ${port}!`);
});

//node app.js
//The server is listening on port 3000!
//The request body JSON is converrted to a JS object.