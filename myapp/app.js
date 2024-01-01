const express = require('express');
const morgan = require('morgan');
const app = express();

const port = 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
	res.status(500).send('Request received');
});

app.listen(port, () => {
	console.log(`The server is listening on port ${port}!`);
});

//node app.js
//The server is listening on port 3000!
//The request body JSON is converrted to a JS object.