const express = require('express');
//const morgan = require('morgan');
const app = express();
const port = 3000;

app.use((req, res) => {
	console.log('Incoming request…');
	console.log('Request type: ' + req.method);
	console.log('The flow will stop here.');
});

app.get('/', (req, res) => {
	console.log("Did we make it to the `get()` middleware step?");
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
