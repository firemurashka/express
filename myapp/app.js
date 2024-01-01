const express = require('express');
//const morgan = require('morgan');
const app = express();
const port = 3000;

app.use((req, res, next) => {
	console.log('Incoming request…');
	console.log(`Requesting server: ${req.hostname}`);
	next();
});

app.get('/user/:id', function (req, res, next) {
	console.log("GET request processing...");
});

app.listen(port, () => {
	console.log(`The server is listening on port ${port}!`);
});



//---------------------------------------------------------------------
//?--Запуск сервера:
//node app.js

//?--Терминал:
//The server is listening on port 3000!
//Incoming request…
//Request type: GET
//The flow will stop here.

//?--Браузер (http://localhost:3000/):
//
