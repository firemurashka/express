var express = require('express');
var app = express();
const port = 3000;


app.use(express.json());

app.get('/', (req, res) => {
	console.log('The request body JSON is converrted to a JS object.');
});

app.listen(port, () => {
	console.log(`The server is listening on port ${port}!`);
});

//node app.js